import style from './Header.module.css'

export default function Header({ title }) {
  return <h1 className={style.titleColor}>{title}</h1>
}
