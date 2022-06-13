import facebook from './images/facebook.png'
import twitter from './images/twitter.png'
import instagram from './images/instagram.png'
import email from './images/email.png'

export function Bar() {
    return (
        <div className="social-bar">
            <ul>
                <li>
                <a href="https://facebook.com">
                    <img src={facebook} target="_blank" alt="" />
                </a>
                </li>
                <li>
                <a href="https://twitter.com">
                    <img src={twitter} target="_blank" alt="" />
                </a>
                </li>
                <li>
                <a href="https://instagram.com">
                    <img src={instagram} target="_blank" alt="" />
                </a>
                </li>
            </ul>
            <a href="mailto:you@email.com" className="email-icon">
                <img src={email} alt="" />
            </a>
        </div>
    )
}