import Link from "next/link"
import setDocumentTitleAs from '../custom-functions/setDocumentTitleAs'

const error_404 = ()=>{

    setDocumentTitleAs('404 - Page not found')

    return (
        <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center',
            flexDirection: 'column',
            minHeight: '100vh',
            background: '#202020',
            color: '#d6d6d6',
            fontSize: '2.6em'
        }}>
            <p style={{ margin: '1em', textDecoration: 'underline' }}>Error 404</p>
            {`I think we shouldn't be here :(`}
            <Link href='/'>
                <a style={{
                     color: '#202020', 
                     padding: '.7em 1em', 
                     background: '#ffd100', 
                     fontSize: '.5em', 
                     marginTop: '1em',
                     borderRadius: '.2em'
                }}>
                    We must go back
                </a>
            </Link>
        </div>
    )
}

export default error_404