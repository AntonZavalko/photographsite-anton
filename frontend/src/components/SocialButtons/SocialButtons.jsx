import './SocialButtons.css';

const socialLinks = [
  { name: 'Facebook', url: '#', icon: 'facebook' },
  { name: 'Instagram', url: '#', icon: 'instagram' },
  { name: 'Twitter', url: '#', icon: 'twitter' },
  { name: 'LinkedIn', url: '#', icon: 'linkedin' }
];

function SocialButtons() {
  return (
    <div className="social-buttons">
      {socialLinks.map((social) => (
        <a 
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`social-btn ${social.icon}`}
          aria-label={social.name}
        >
          <i className={`fab fa-${social.icon}`}></i>
        </a>
      ))}
    </div>
  );
}

export default SocialButtons;