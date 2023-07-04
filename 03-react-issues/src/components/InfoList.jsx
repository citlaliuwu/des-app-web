const InfoList = ({ id, title, user, html_url}) => {
  return (
    <ul className='list-group'>
      <a className='vinculo' href={html_url}>{title}</a>
      <li className='list-group-item'>ID Issues: {id}</li>
      <li className='list-group-item'>Nombre del Usuario: {user.login}</li>
    </ul>

  )
}
export default InfoList
