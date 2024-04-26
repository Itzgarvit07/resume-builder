import React from 'react'
import ResumePreview from './ResumePreview'
import NewResume from './NewResume'
import HeaderInner from './HeaderInner'
import ResumeSelection from './ResumeSelection'

function ResumeWrapper() {
  return (
    <>
    <main className='flex'>
    <HeaderInner/>
    <div className='w-4/5 flex'>
        <ResumeSelection/>
        <ResumePreview/>
    </div>
    </main>
    </>
    
  )
}

export default ResumeWrapper