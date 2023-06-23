import { Footer } from '.';

export default {
  title: 'Footer',
  component: Footer,
  args: {
    children: 'Footer',
    footerHtml: `<p><a href="https://beacons.page/otaviomiranda">Feito por Matheus Loeblein</a></p>`,
  },
};

export const Template = (args) => {
  return (
    <div>
      <Footer {...args} />
    </div>
  );
};
