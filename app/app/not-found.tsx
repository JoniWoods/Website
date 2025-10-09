"use client";

import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div style={{ 
      minHeight: '100vh',
      background: 'linear-gradient(135deg, rgba(154, 27, 31, 0.05) 0%, rgba(255, 255, 255, 1) 50%, rgba(246, 193, 38, 0.1) 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1rem'
    }}>
      <div style={{ maxWidth: '64rem', margin: '0 auto', textAlign: 'center' }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '2rem', 
          alignItems: 'center' 
        }}>
          {/* Logo */}
          <div style={{ order: 2 }}>
            <Image
              src="/images/JoniWoods_logo.png"
              alt="Joni Woods logo - certified life coach, author and transformation expert"
              width={300}
              height={200}
              style={{ margin: '0 auto 1.5rem', opacity: 0.9 }}
              priority
            />
          </div>
          
          {/* Content */}
          <div style={{ order: 1, textAlign: 'left' }}>
            <div style={{ marginBottom: '1.5rem' }}>
              <h1 style={{ 
                fontSize: 'clamp(4rem, 8vw, 6rem)', 
                fontWeight: 'bold', 
                color: '#9a1b1f', 
                marginBottom: '0.5rem',
                fontFamily: 'Georgia, serif',
                lineHeight: 1
              }}>
                404
              </h1>
              <h2 style={{ 
                fontSize: 'clamp(1.5rem, 4vw, 2rem)', 
                color: '#545454', 
                marginBottom: '1rem',
                fontFamily: 'Georgia, serif'
              }}>
                Page Not Found
              </h2>
            </div>
            
            <div style={{ marginBottom: '2rem' }}>
              <p style={{ 
                fontSize: '1.125rem', 
                color: 'rgba(84, 84, 84, 0.8)', 
                lineHeight: '1.6',
                marginBottom: '1rem'
              }}>
                It looks like this page has wandered off the path. Sometimes we all need to find our way back to where we belong.
              </p>
              <p style={{ 
                fontSize: '1rem', 
                color: 'rgba(84, 84, 84, 0.7)',
                lineHeight: '1.5'
              }}>
                Let's get you back on track to transformation and healing.
              </p>
            </div>
            
            <div style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '1rem',
              marginBottom: '3rem'
            }}>
              <Link 
                href="/" 
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '0.75rem 2rem',
                  backgroundColor: '#9a1b1f',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '0.375rem',
                  fontSize: '1rem',
                  fontWeight: '500',
                  transition: 'all 0.2s',
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                Return Home
                <svg style={{ marginLeft: '0.5rem', width: '1.25rem', height: '1.25rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </Link>
              
              <Link 
                href="https://calendly.com/joniwoods/virtual-coffee" 
                target="_blank"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '0.75rem 2rem',
                  backgroundColor: 'transparent',
                  color: '#545454',
                  textDecoration: 'none',
                  borderRadius: '0.375rem',
                  fontSize: '1rem',
                  fontWeight: '500',
                  border: '2px solid #545454',
                  transition: 'all 0.2s',
                  cursor: 'pointer'
                }}
              >
                Let's Get Coffee
              </Link>
            </div>
            
            {/* Inspirational quote */}
            <div style={{ 
              padding: '1.5rem',
              backgroundColor: 'rgba(246, 193, 38, 0.1)',
              borderRadius: '0.5rem',
              borderLeft: '4px solid #f6c126',
              marginBottom: '2rem'
            }}>
              <blockquote style={{ 
                color: 'rgba(84, 84, 84, 0.8)', 
                fontStyle: 'italic', 
                fontSize: '1rem',
                margin: '0 0 0.5rem 0'
              }}>
                "Every detour is an opportunity to discover something new about yourself."
              </blockquote>
              <cite style={{ 
                color: '#545454', 
                fontSize: '0.875rem',
                fontStyle: 'normal'
              }}>
                - Joni Woods
              </cite>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}