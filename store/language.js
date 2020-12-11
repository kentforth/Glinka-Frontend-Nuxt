import { mainTextENG } from '../language/english/home'

export const state = () => ({
  navigation: {
    title: 'Anastasiya GLinka',
    home: 'Home',
    about: 'About',
    portfolio: 'Portfolio',
    contact: 'Contact'
  },
  home: {
    contactMeText: 'Contact Me',
    worksText: 'See more',
    worksTextTitle: 'MY WORKS',
    instagramTitle: 'FOLLOW MY INSTAGRAM',
    mainText: 'I love street style. But my paths diverged with street art, which is why I am a calligrapher now.\n' +
      '17 year old calligrapher from a small town called Pavlodar in Kazakhstan.\n' +
      '\n' +
      'Do you want to convey a story from life, a declaration of love, a wish for a birthday beautifully? I will help you',
    mainTitle: 'I\'m GLINKA',
    mainTitle2: 'Hello,',
    mainTitle3: 'ANASTASIYA',
    mainTitle4: 'GLINKA',
  },
  about: {
    title: 'About me',
    name: 'Anastasiya Glinka',
    text: 'I love street style. But my paths diverged with street art, which is why I am a calligrapher now.\n' +
      '17 year old calligrapher from a small town called Pavlodar in Kazakhstan.\n' +
      '\n' +
      'Do you want to convey a story from life, a declaration of love, a wish for a birthday beautifully? I will help you',
    worksTitle: 'MY FAVOURITE WORKS'
  },
  portfolio: {
    title: 'Portfolio'
  },
  contact: {
    title: 'Contact',
    formTitle: 'Get in touch',
    formName: 'Name',
    formEmail: 'Email',
    formSubject: 'Subject',
    formMessage: 'Message',
    formButtonText: 'Send'
  }
})

export const mutations = {
  SET_LANGUAGE_TO_ENG: (state) => {
    state.navigation = {
      title: 'Anastasiya GLinka',
      home: 'Home',
      about: 'About',
      portfolio: 'Portfolio',
      contact: 'Contact'
    };
    state.home = {
      mainText: 'I love street style. But my paths diverged with street art, which is why I am a calligrapher now.\n' +
        '17 year old calligrapher from a small town called Pavlodar in Kazakhstan.\n' +
        '\n' +
        'Do you want to convey a story from life, a declaration of love, a wish for a birthday beautifully? I will help you',
      contactMeText: 'Contact Me',
      worksText: 'See more',
      worksTextTitle: 'MY WORKS',
      instagramTitle: 'FOLLOW MY INSTAGRAM',
      mainTitle: 'I\'m GLINKA',
      mainTitle2: 'Hello,',
      mainTitle3: 'ANASTASIYA',
      mainTitle4: 'GLINKA',
    };
    state.about = {
      title: 'About me',
      name: 'Anastasiya Glinka',
      worksTitle: 'MY FAVOURITE WORKS'
    };
    state.portfolio = {
      title: 'Portfolio'
    };
    state.contact = {
      title: 'Contact',
      formTitle: 'Get in touch',
      formName: 'Name',
      formEmail: 'Email',
      formSubject: 'Subject',
      formMessage: 'Message',
      formButtonText: 'Send'
    };
  },

  SET_LANGUAGE_TO_RU: (state) => {
    state.navigation = {
      title: 'Анастасия Глинка',
      home: 'Домой',
      about: 'Обо мне',
      portfolio: 'Портфолио',
      contact: 'Контакты'
    };
    state.home = {
      mainText: 'Я очень люблю уличный стиль. Но, с уличным искусством у меня дороги разошлись, именно поэтому сейчас я каллиграф.\n' +
        '17 летний каллиграф из маленького городка под названием Павлодар, в Казахстане.\n' +
        '\n' +
        'Хочешь как то красиво передать историю из жизни, признание в любви, пожелание на день рождение? Я тебе помогу',
      contactMeText: 'Связаться со мной',
      worksText: 'Посмотреть',
      worksTextTitle: 'Мои Работы',
      instagramTitle: 'Я в инстаграмм',
      mainTitle: 'Я Глинка',
      mainTitle2: 'Привет,',
      mainTitle3: 'АНАСТАСИЯ',
      mainTitle4: 'ГЛИНКА',
    };
    state.about = {
      title: 'Обо мне',
      name: 'Анастасия Глинка',
      worksTitle: 'Мои любимые работы'
    };
    state.portfolio = {
      title: 'Портфолио'
    };
    state.contact = {
      title: 'Контакты',
      formTitle: 'Оставайтесь на связи',
      formName: 'Имя',
      formEmail: 'Адрес',
      formSubject: 'Тема',
      formMessage: 'Сообщение',
      formButtonText: 'Отправить'
    };
  }
}

export const actions = {
  CHANGE_LANGUAGE_TO_ENG({commit}) {
      commit('SET_LANGUAGE_TO_ENG')
  },

  CHANGE_LANGUAGE_TO_RU({commit}) {
    commit('SET_LANGUAGE_TO_RU')
  }
}
