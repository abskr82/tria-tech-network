interface ContactUsIframeProps {
    iframeSrc: string;
}

const ContactUsIframe: React.FC<ContactUsIframeProps> = ({ iframeSrc }) => {
    return (
        <iframe
            title="Contact Us"
            aria-label="Contact Us"
            frameBorder="0"
            style={{ height: '100vh', width: '99%', border: 'none' }}
            src={iframeSrc}
        ></iframe>
    );
};

export default ContactUsIframe;