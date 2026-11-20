import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ProjectCard from './ProjectCard.vue'

const project = {
  id: 1,
  title: 'Catatan Harian',
  description: 'Aplikasi catatan sederhana.',
  tags: ['Vue', 'JavaScript'],
  image: 'https://example.com/a.jpg',
  demo: '#',
  repo: '#',
}

describe('ProjectCard', () => {
  it('menampilkan judul, tag, dan gambar lazy load', () => {
    const wrapper = mount(ProjectCard, { props: { project } })

    expect(wrapper.find('h3').text()).toBe('Catatan Harian')
    expect(wrapper.findAll('li')).toHaveLength(2)
    expect(wrapper.find('img').attributes('loading')).toBe('lazy')
  })
})
