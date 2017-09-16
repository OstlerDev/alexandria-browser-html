import htmlView from './aspects/layout/html.view';
import footerView from './aspects/layout/footer.view';
import navbarView from './aspects/navbar/navbar.view';
import searchBarView from './aspects/search/searchBar.view';
import videoPlayerView from './aspects/content/video/videoPlayer.view';
import profileView from './aspects/user/profile/profileSummary.view';
import balanceView from './aspects/payment/balanceSummary.view';
import paywallView from './aspects/payment/paywall.view';

function layout() {
  return { layout: this };
};

const balance = {
  quantity: 240
};

const profileViewLayout = ({
    balance: balanceView(balance)
  })::layout();

const user = {
  name: 'Sky!'
};

const navbarViewLayout = ({
    items: [searchBarView],
    profile: profileViewLayout::profileView(user)
  })::layout();

// const videoPlayerContext = layout({
//     paywall: paywallView(balance: { quantity: 3 } })
//   });

export function renderApp(/* layout, */data) {
  const mainLayout = ({
    navbar: navbarViewLayout::navbarView(),
    main: this::videoPlayerView(), //todo: update given change of data in contextual group (generic)
    footer: footerView()
  })::layout();

  const markup = mainLayout::htmlView();

  return markup;
}