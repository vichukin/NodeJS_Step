export default function UserDetails(props){
    return <>
        <h3>Login: {props.user.login}</h3>
        <img src={props.user.avatar_url} alt={props.user.login}></img>
        <a href={props.user.html_url}>Link to Github</a>
        <div>Created: {new Date(props.user.created_at).toLocaleDateString()}</div>
    </>
}