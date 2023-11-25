import { LegacyRef, forwardRef } from 'react';
import style from './navMenu.module.css'

export const NavMenu = forwardRef(function NavMenu (props, ref: LegacyRef<HTMLLIElement>){
  const { title, sub, padding, ...otherProps } = props;
  const subMenus = ()=>{
    let subMenuElements = []
    for(let i:number = 0; i < sub.length; i++){
      subMenuElements.push(<span className={style.ls}><a
        href={sub[i].link}>{sub[i].str}</a></span>);
    }
    return subMenuElements;
  }

  return(
    <li ref={ref} className={style['nav-menu']} style={{paddingLeft:padding, paddingRight: padding}}>
      <a href={title.link}><span>{title.str}</span></a>
      <div className={style.sub}>
        <div className={style['sub-bg']}>
          {subMenus()}
        </div>
      </div>
    </li>
  );
  }
)