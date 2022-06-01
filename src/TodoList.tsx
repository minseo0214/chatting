import React from 'react'

export function Todo() {
  return (
    <div
      style={{
        minHeight: '50px',
        display: 'flex',
        background: 'white',
        flexDirection: 'row',
        //justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '10px',
        marginTop: '20px',
      }}
    >
      {/*체크 박스 클릭 시 박스에 부모 색 바꾸기, 버튼에 체크 표시
      질문: 체크 표시를 했을 때 박스가 늘어나는 이유를 모르겠습니다.*/}

      <div className='checkbox'>
        {
          <svg height='30' width='30' viewBox='-3 -5 30 30' fill='#000000'>
            <path d='M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z' />
          </svg>
        }
      </div>
      {/*text */}
      <div
        style={{
          flexGrow: 1,
          color: 'black',
          margin: '5px',
          wordBreak: 'break-all',
          wordWrap: 'break-word',
        }}
      ></div>
      {/*delete */}
      <svg
        style={{
          minHeight: '24px',
          minWidth: '24px',
          margin: '15px',
          cursor: 'pointer',
        }}
        xmlns='http://www.w3.org/2000/svg'
        height='24px'
        width='24px'
        viewBox='0 0 24 24'
        fill='#2F69FF'
      >
        <path d='M0 0h24v24H0V0z' fill='none' />
        <path d='M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4z' />
      </svg>
    </div>
  )
}
