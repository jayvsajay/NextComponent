import Image from 'next/image'

function PetsPage() {
  return (
    <div style={{marginLeft:300}}>
      {['1', '2', '3', '4', '5'].map(path => {
        return (
          <div key={path}>
            <Image src={`/${path}.jpg`} alt='pet' width='400' height='300' />
          </div>
        )
      })}
    </div>
  )
}

export default PetsPage