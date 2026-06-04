import './SocialButtons.css';

const socialLinks = [
  { name: 'Facebook', url: 'https://www.facebook.com/share/1J6c372hEk/?mibextid=wwXIfr', icon: 'facebook' },
  { name: 'Instagram', url: 'https://www.instagram.com/toxa.zavalko?igsh=bzIwbWFocWJxYnNk&utm_source=qr', icon: 'instagram' },
  { name: 'Twitter', url: 'https://x.com/antonzavalko07?s=21', icon: 'twitter' },
  { name: 'LinkedIn', url: 'www.linkedin.com/in/антон-завалко-81a24a414', icon: 'linkedin' }
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