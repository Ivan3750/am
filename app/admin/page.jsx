'use client'

import { NextStudio } from 'next-sanity/studio'
import config from '../../app/cms/sanity.config.js'

export default function AdminPage() {
  return <NextStudio config={config} />
}
