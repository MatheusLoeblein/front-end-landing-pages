import { mapSectionTwoColums } from './map-sections';

describe('map-sections', () => {
  it('should map values section two colums no data ', () => {
    const data = mapSectionTwoColums();
    expect(data.component).toBe('');
    expect(data.title).toBe('');
    expect(data.text).toBe('');
    expect(data.srcImage).toBe('');
    expect(data.background).toBe(false);
    expect(data.sectionId).toBe('');
  });

  it('should map values section two colums ', () => {
    const data = mapSectionTwoColums({
      __component: 'section.section-two-columns',
      title: 'JANUARY BRINGS US FIREFOX 85',
      description:
        'To wrap up January, we are proud to bring you the release of Firefox 85. In this version we are bringing you support for the :focus-visible pseudo-class in CSS and associated devtools, and the complete removal of Flash support from Firefox.\n\n',
      image: {
        data: {
          id: 4,
          attributes: {
            url: 'https://res.cloudinary.com/deosirvhi/image/upload/v1651926290/javascript_8c37407653.svg',
          },
        },
      },
      metadata: {
        section_id: 'home',
        background: true,
      },
    });
    expect(data.component).toBe('section.section-two-columns');
    expect(data.title).toBe('JANUARY BRINGS US FIREFOX 85');
    expect(data.text).toBe(
      'To wrap up January, we are proud to bring you the release of Firefox 85. In this version we are bringing you support for the :focus-visible pseudo-class in CSS and associated devtools, and the complete removal of Flash support from Firefox.\n\n',
    );
    expect(data.srcImage).toBe(
      'https://res.cloudinary.com/deosirvhi/image/upload/v1651926290/javascript_8c37407653.svg',
    );
    expect(data.background).toBe(true);
    expect(data.sectionId).toBe('home');
  });
});
