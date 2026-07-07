'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Download, Loader2 } from 'lucide-react'

const FILE_URL = '/schizophrenia-explained.pdf'
const FILE_NAME = 'Schizophrenia-Explained.pdf'

export function DownloadBookButton() {
  const [loading, setLoading] = useState(false)

  async function handleDownload() {
    try {
      setLoading(true)
      const res = await fetch(FILE_URL)
      if (!res.ok) throw new Error(`Failed to fetch file: ${res.status}`)
      const blob = await res.blob()
      const url = URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = FILE_NAME
      document.body.appendChild(link)
      link.click()
      link.remove()
      URL.revokeObjectURL(url)
    } catch (err) {
      // Fallback: open the PDF directly if the blob download is blocked
      console.log('[v0] Blob download failed, opening in new tab:', err)
      window.open(FILE_URL, '_blank', 'noopener,noreferrer')
    } finally {
      setLoading(false)
    }
  }

  return (
    <Button
      onClick={handleDownload}
      size="lg"
      className="rounded-full"
      disabled={loading}
      aria-label="Download Schizophrenia, Explained (PDF)"
    >
      {loading ? (
        <Loader2 className="size-4 animate-spin" aria-hidden="true" />
      ) : (
        <Download className="size-4" aria-hidden="true" />
      )}
      {loading ? 'Preparing…' : 'Download the book'}
    </Button>
  )
}
