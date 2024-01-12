const SocialIcon = ({ icon, url }) => {
  return (
    <a href={`${url}`} target="_blank">
      {icon}
    </a>
  );
};

export default SocialIcon;
