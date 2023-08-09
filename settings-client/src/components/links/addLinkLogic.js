import { postNewLink } from '../../services/linksApi.service';
const icons = {
  GitHub: 'AiFillGithub',
  Figma: 'FaFigma',
  Linkdin: 'AiFillLinkedin',
  Custom: 'AiOutlineLink',
};
const onAddLink = async (type, link, title) => {
  const newLink = {
    Icon: icons[type],
    title: title || type,
    link,
  };
  postNewLink(newLink)
    .then((data) => {})
    .catch((err) => {
      console.log(err);
    });
};

export { onAddLink };
