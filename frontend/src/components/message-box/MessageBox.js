import { NavLink } from 'react-router-dom';

export default function MessageBox(props) {
  return (
    <>
      <div className="message__error">
        <span>{props.children}</span>
      </div>
      <section>
        <NavLink to="/" className="link-error">
          retourner a l'accueil
        </NavLink>
      </section>
    </>
  );
}
