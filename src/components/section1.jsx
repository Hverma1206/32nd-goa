import React from 'react'

const section1 = () => {
  return (
    <div style={{
      padding: '4rem 2rem',
      minHeight: '100vh',
      backgroundColor: '#f8f9fa',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',}}>
      <h2 style={{
        fontSize: '3rem',
        color: '#333',
        marginBottom: '2rem',
        textAlign: 'center'
      }}>
        Welcome to Section 1
      </h2>
      <p style={{
        fontSize: '1.2rem',
        color: '#666',
        textAlign: 'center',
        maxWidth: '800px',
        lineHeight: '1.6'
      }}>
        This is the first section that appears after the hero animation. 
        You can add your content here.
      </p>
    </div>
  )
}

export default section1