export default function Filter({
  marginRight,
  marginLeft,
}: {
  marginRight?: boolean
  marginLeft?: boolean
}) {
  return (
    <div className={`${marginLeft ? 'ml-1' : ''} ${marginRight ? 'mr-1' : ''}`}>
      <svg
        width='14'
        height='14'
        viewBox='0 0 35 32'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M28.7758 19.416C32.2078 19.416 34.9998 22.194 34.9998 25.608C34.9998 29.022 32.2078 31.8 28.7758 31.8C25.3418 31.8 22.5478 29.022 22.5478 25.608C22.5478 22.194 25.3418 19.416 28.7758 19.416ZM28.7758 22.416C26.9958 22.416 25.5478 23.848 25.5478 25.608C25.5478 27.37 26.9958 28.8 28.7758 28.8C30.5538 28.8 31.9998 27.37 31.9998 25.608C31.9998 23.848 30.5538 22.416 28.7758 22.416ZM14.1606 24.1856C14.9886 24.1856 15.6606 24.8576 15.6606 25.6856C15.6606 26.5136 14.9886 27.1856 14.1606 27.1856H1.5586C0.7306 27.1856 0.0586 26.5136 0.0586 25.6856C0.0586 24.8576 0.7306 24.1856 1.5586 24.1856H14.1606ZM6.226 0C9.66 0 12.452 2.78 12.452 6.194C12.452 9.608 9.66 12.384 6.226 12.384C2.794 12.384 0 9.608 0 6.194C0 2.78 2.794 0 6.226 0ZM6.226 3C4.448 3 3 4.432 3 6.194C3 7.954 4.448 9.384 6.226 9.384C8.006 9.384 9.452 7.954 9.452 6.194C9.452 4.432 8.006 3 6.226 3ZM32.3822 4.8008C33.2102 4.8008 33.8822 5.4728 33.8822 6.3008C33.8822 7.1288 33.2102 7.8008 32.3822 7.8008H19.7822C18.9542 7.8008 18.2822 7.1288 18.2822 6.3008C18.2822 5.4728 18.9542 4.8008 19.7822 4.8008H32.3822Z'
          fill='white'
        />
      </svg>
    </div>
  )
}