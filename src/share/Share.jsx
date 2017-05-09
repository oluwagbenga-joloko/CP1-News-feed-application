import React from 'react';
import PropTypes from 'prop-types';
import {
  ShareButtons,
  generateShareIcon,
} from 'react-share';


const {
  FacebookShareButton,
  GooglePlusShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} = ShareButtons;

const FacebookIcon = generateShareIcon('facebook');
const TwitterIcon = generateShareIcon('twitter');
const GooglePlusIcon = generateShareIcon('google');
const LinkedinIcon = generateShareIcon('linkedin');
/**
 * @param {any} props
 * @returns {*} element to be rendered
 */
function Share(props) {
  const shareUrl = props.share;
  const title = props.title;

  return (
    <div className="Demo__container">
      <div className="Demo__some-network">
        <FacebookShareButton
          url={shareUrl}
          title={title}
          className="Demo__some-network__share-button"
        >
          <FacebookIcon
            size={32}
            round
          />
        </FacebookShareButton>
      </div>
      <div className="Demo__some-network">
        <TwitterShareButton
          url={shareUrl}
          title={title}
          className="Demo__some-network__share-button"
        >
          <TwitterIcon
            size={32}
            round
          />
        </TwitterShareButton>
      </div>
      <div className="Demo__some-network">
        <GooglePlusShareButton
          url={shareUrl}
          className="Demo__some-network__share-button"
        >
          <GooglePlusIcon
            size={32}
            round
          />
        </GooglePlusShareButton>
      </div>

      <div className="Demo__some-network">
        <LinkedinShareButton
          url={shareUrl}
          title={title}
          windowWidth={750}
          windowHeight={600}
          className="Demo__some-network__share-button"
        >
          <LinkedinIcon
            size={32}
            round
          />
        </LinkedinShareButton>
      </div>
    </div>
  );
}

export default Share;