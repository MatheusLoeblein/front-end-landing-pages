export const mapSections = (section = []) => {
  return section.map((section) => {
    if (section.__component === 'section.section-two-columns') {
      return mapSectionTwoColums(section);
    }
    if (section.__component === 'section.section-content') {
      return mapSectionContent(section);
    }
    if (section.__component === 'section.section-grid') {
      const { __component: { text_grid = [], image_grind = [] } = '' } =
        section.__component;
      if (text_grid.length > 0) {
        return mapTextGrid(section);
      }
      if (image_grind.length > 0) {
        return mapImageGrid(section);
      }
    }
    return section;
  });
};

export const mapSectionTwoColums = (section = {}) => {
  const {
    __component: component = '',
    title = '',
    description: text = '',
    image: { data: { attributes: { url: srcImage = '' } = {} } = {} } = {},
    metadata: { background = false, section_id: sectionId = '' } = false,
  } = section;

  return {
    component,
    title,
    text,
    srcImage,
    background,
    sectionId,
  };
};

export const mapSectionContent = (section = {}) => {
  const {
    __component: component = '',
    title = '',
    content: html = '',
    metadata: { background = false, section_id: sectionId = '' } = false,
  } = section;

  return {
    component,
    title,
    html,
    background,
    sectionId,
  };
};

export const mapTextGrid = (section = {}) => {
  const {
    title = '',
    description = '',
    metadata: { background = false, section_id: sectionId = '' } = false,
    text_grid: grid = [],
  } = section;

  return {
    component: 'section.section-grid-text',
    title,
    description,
    background,
    sectionId,
    grid,
  };
};

export const mapImageGrid = (section = {}) => {
  const {
    title = '',
    description = '',
    metadata: { background = false, section_id: sectionId = '' } = false,
    image_grid: grid = [],
  } = section;

  return {
    component: 'section.section-grid-image',
    title,
    description,
    background,
    sectionId,
    image_grid: grid.map((img) => {
      const { image: { data: srcImage = '' } = {} } = img;

      return {
        srcImage,
        altText: srcImage,
      };
    }),
  };
};
