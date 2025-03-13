import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import ListSection from '../../app/components/ListSection.vue'
import SectionHeader from '../../app/components/SectionHeader.vue'
import ListLinkItem from '../../app/components/ListLinkItem.vue'
import LinkItem from '../../app/components/LinkItem.vue'

describe('ListSection', () => {
  // Test rendering with list type
  it('renders correctly with list type', async () => {
    const wrapper = await mountSuspended(ListSection, {
      props: {
        title: 'Test Title',
        content: 'Test Content',
        type: 'list',
        list: [
          {
            item: {
              text: 'Item 1',
              url: '/item1',
              content: 'Item 1 content'
            }
          },
          {
            item: {
              text: 'Item 2',
              url: '/item2',
              content: 'Item 2 content'
            }
          }
        ]
      },
      shallow: false,
      global: {
        stubs: {
          NuxtLink: {
            template: '<a :href="to"><slot /></a>',
            props: ['to']
          }
        }
      }
    })

    // Check the component renders correctly
    expect(wrapper.vm).toBeDefined()
    
    // Check if SectionHeader component is rendered with correct props
    const sectionHeader = wrapper.findComponent(SectionHeader)
    expect(sectionHeader.exists()).toBe(true)
    expect(sectionHeader.props('title')).toBe('Test Title')
    expect(sectionHeader.props('content')).toBe('Test Content')
    
    // Check if the correct list item component is used (ListLinkItem)
    const listItems = wrapper.findAllComponents(ListLinkItem)
    expect(listItems.length).toBe(2)
    
    // Check if h3 elements contain the correct text
    const headings = wrapper.findAll('h3')
    expect(headings.length).toBe(2)
  })
  
  // Test rendering with link type
  it('renders correctly with link type', async () => {
    const wrapper = await mountSuspended(ListSection, {
      props: {
        title: 'Link List',
        type: 'link',
        list: [
          {
            item: {
              text: 'Link 1',
              url: '/link1'
            }
          },
          {
            item: {
              text: 'Link 2',
              url: '/link2'
            }
          }
        ]
      },
      global: {
        stubs: {
          NuxtLink: {
            template: '<a :href="to"><slot /></a>',
            props: ['to']
          }
        }
      }
    })
    
    // Check if the correct list item component is used (LinkItem)
    const linkItems = wrapper.findAllComponents(LinkItem)
    expect(linkItems.length).toBe(2)
  })
  
  // Test rendering with CTA
  it('renders with CTA button', async () => {
    const wrapper = await mountSuspended(ListSection, {
      props: {
        title: 'With CTA',
        showCTA: true,
        primaryCTA: {
          text: 'Click Me',
          url: '/action'
        },
        type: 'list',
        list: [
          {
            item: {
              text: 'Sample Item',
              url: '/sample'
            }
          }
        ]
      },
      global: {
        stubs: {
          NuxtLink: {
            template: '<a :href="to"><slot /></a>',
            props: ['to']
          }
        }
      }
    })
    
    // Check if the SectionHeader has the CTA props
    const sectionHeader = wrapper.findComponent(SectionHeader)
    expect(sectionHeader.props('showCTA')).toBe(true)
    expect(sectionHeader.props('primaryCTA')).toEqual({
      text: 'Click Me',
      url: '/action'
    })
  })
  
  // Test with price
  it('renders with price', async () => {
    const wrapper = await mountSuspended(ListSection, {
      props: {
        title: 'Pricing Section',
        price: '$99',
        type: 'list',
        list: [
          {
            item: {
              text: 'Feature',
              url: '/feature'
            }
          }
        ]
      },
      global: {
        stubs: {
          NuxtLink: {
            template: '<a :href="to"><slot /></a>',
            props: ['to']
          }
        }
      }
    })
    
    // Check if the price is passed to SectionHeader
    const sectionHeader = wrapper.findComponent(SectionHeader)
    expect(sectionHeader.props('price')).toBe('$99')
  })
})
