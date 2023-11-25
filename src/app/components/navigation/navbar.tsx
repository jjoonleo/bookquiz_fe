'use client'

import Link from 'next/link'
import style from './navbar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faBars } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { NavMenu } from './navMenu'

export default function NavBar(){

  const elementRef = useRef(null);
  const menusRef = useRef([]);
  const [padding, setPadding] = useState(0);
  const menuInfo = [
    {
      title:{str:'독서퀴즈마당',link:'https://bookquiz.co.kr/quiz/qz_bklist.asp'},
      sub:[
        {str:'영역별',link:''},
        {str:'교과관련',link:''},
        {str:'외부추천',link:''},
        {str:'퀴즈맛보기',link:''},
        {str:'독서퀴즈출제요청',link:''},
        {str:'독서퀴즈도서목록',link:''},
      ]
    },
    {
      title:{str:'북퀴즈골든벨',link:'https://bookquiz.co.kr/bell/'},
      sub:[
        {str:'월간 골든벨',link:''},
        {str:'연간 골든벨',link:''},
        {str:'나의 골든벨',link:''},
      ]
    },
    {
      title:{str:'독서논술능력진단',link:'https://bookquiz.co.kr/reading/'},
      sub:[
        {str:'독서논술능력진단 소개',link:''},
        {str:'독서논술능력진단 방법',link:''},
        {str:'독서논술능력진단 응시',link:''},
      ]
    },
    {
      title:{str:'BOOK TV',link:'https://bookquiz.co.kr/reading/'},
      sub:[
        {str:'독서 TV',link:''},
        {str:'우화 TV',link:''},
      ]
    },
    {
      title:{str:'책갈피',link:'https://bookquiz.co.kr/reading/'},
      sub:[
        {str:'독서&북칼럼',link:''},
        {str:'행복책장',link:''},
        {str:'독서퍼즐',link:''},
        {str:'책속의메아리',link:''},
      ]
    },
    {
      title:{str:'알림마당',link:'https://bookquiz.co.kr/reading/'},
      sub:[
        {str:'공지사항',link:''},
        {str:'공모소식',link:''},
        {str:'기증도서소개',link:''},
        {str:'신간안내',link:''},
      ]
    },
    {
      title:{str:'마이페이지',link:'https://bookquiz.co.kr/reading/'},
      sub:[
        {str:'회원정보',link:''},
        {str:'자료회원전환/연장',link:''},
        {str:'결제내역',link:''},
        {str:'다운로드내역',link:''},
        {str:'퀴즈풀이내역',link:''},
        {str:'나의 골든벨',link:''},
        {str:'장바구니',link:''},
        {str:'회원탈퇴',link:''},
      ]
    },
  ]
  const menus = ()=>{
    let menuElements = [];
    for(let i:number = 0; i < menuInfo.length; i++){
      menuElements.push(<NavMenu ref={el => menusRef.current[i] = el} title={menuInfo[i].title} sub={menuInfo[i].sub} padding={padding}/>)
    }
    return menuElements;
  }

  useEffect(()=>{
    // let widthSum = 0;
      
    // for(let i = 0; i < menusRef.current.length; i++){
    //   widthSum += menusRef.current[i].clientWidth;
    // }
    // function handleResize(){
    //   let containerWidth = elementRef.current.clientWidth;
    //   setPadding(Math.max(0,(containerWidth - widthSum)/14-0.2));
    // }
    
    // window.addEventListener('resize', handleResize);
    // handleResize();
    // return () => window.removeEventListener("resize", handleResize);
  },[]);

  return(
    <nav className={style.nav}>
      <div className={style['nav-top']}>
        <div className={style.left}><Link href='/'><h1 className={style.logo}>BOOKQUIZ</h1></Link>
          <fieldset className={style.mSearch}>
            <span className={style.ti}>독서퀴즈검색</span>
            <input type="text" id="search_title" value="" className={style.keyword} placeholder="검색어를 입력하세요" title="검색어"/>
            <FontAwesomeIcon className={style['search-icon']} icon={faMagnifyingGlass}/>
          </fieldset> 
        </div>
        <div className={style.right}>
          <a href="https://bookquiz.co.kr/member/login_form.asp">로그인</a>
          <a href="https://bookquiz.co.kr/trade/cart.asp">장바구니</a>
          <a href="/help/guide_first.asp">이용안내</a>
          <a href="/help/faq.asp">FAQ</a>
        </div>
      </div>
      <div className={style.line}>

      </div>
        <div ref={elementRef} className={style["nav-bottom"]}>
          {menus()}
        </div>
      </nav>
  )
}