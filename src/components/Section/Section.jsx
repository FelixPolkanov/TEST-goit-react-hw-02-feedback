
         
import PropTypes from 'prop-types';
import { SectionWrapper, Title } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <SectionWrapper>
          {title && <Title>{title}</Title>}
      {children}
    </SectionWrapper>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.object.isRequired,
};