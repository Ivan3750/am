'use client'

import { NextStudio } from 'next-sanity/studio'
import config from '../cms/sanity.config' // Шлях до studio config

export default function AdminPage() {
  return <NextStudio config={config} />
}
