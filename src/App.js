import React, { Component } from 'react';
import {
  Deck, Slide, Text, Heading, Image, Link, S,
  List, ListItem, BlockQuote, Quote, Cite, Appear
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';
import './assets/ghtheme.css';

// Import images
import intro from './assets/intro.gif';
import peopleSenses from './assets/people-senses.png';
import pornGif  from './assets/porn.gif';
import vrKits from './assets/vr-kits-bg.gif';
import googleCardboard from './assets/google-cardboard.png';
import miVr from './assets/mi-vr.png';
import vrHeadsetsTable from './assets/vr-headsets-table.png';

const colors = {
  primary: "white",
  secondary: "#2c3e50",
  tertiary: "#EF2D5E",
  quarternary: "#24CAFF",
};

const fonts = {
  primary: {
    name: 'Fira Sans',
    googleFont: true,
    styles: ['300', '700']
  },
  secondary: 'Helvetica'
};

const theme = createTheme(colors, fonts)

export default class App extends Component {
  render() {
    return (
      <Deck transition={['fade']} transitionDuration={500} theme={theme} progress="bar">

        <Slide bgImage={intro} bgDarken={0.5}>
          <Heading fit caps textColor="primary">15 хвилин про</Heading>
          <Heading fit caps>віртуальну</Heading>
          <Heading fit caps>реальність</Heading>
        </Slide>

        <Slide>
          <Heading size={2}>Що таке віртуальна реальність?</Heading>
        </Slide>

        <Slide bgColor="secondary">
          <BlockQuote>
            <Quote textSize="3.5rem">
              Віртуальна реальність (VR) —
              уявна реальність, створена за допомогою комп'ютерних систем, які забезпечують візуальні і звукові ефекти, що занурюють глядача в ілюзорний світ за екраном.
            </Quote>
            <Cite>Wikipedia</Cite>
          </BlockQuote>
        </Slide>

        <Slide>
          <Heading size={2}>Індустрія дала добро</Heading>
        </Slide>

        <Slide>
          <Image src={pornGif} height="90vh" margin="-15vh auto 0"/>
        </Slide>

        <Slide bgColor="secondary">
          <BlockQuote>
            <Quote textSize="3.5rem">
              разберём подробно мир порно<br />
              так как порно для современности опорно порно.
            </Quote>
            <Cite>Кровосток — Порно</Cite>
          </BlockQuote>
        </Slide>

        <Slide>
          <Heading size={2}>Як створити віртуальну реальність?</Heading>
        </Slide>

        <Slide>
          <Image src={peopleSenses} height="400px"/>
          <Heading size={2}>Обманути органи чуття</Heading>
        </Slide>

        <Slide bgImage={vrKits} bgDarken={0.75}>
          <Heading>Шоломи віртуальної реальності</Heading>
        </Slide>

        <Slide>
          <Heading size={2}>Що є на ринку?</Heading>
        </Slide>

        <Slide>
          <Heading size={2}>Ключові відміності</Heading>
          <List>
            <ListItem>6DoF / 3DoF</ListItem>
            <ListItem>Наявність контролерів (та їх 6DoF/3DoF)</ListItem>
            <ListItem>Працюють від ПК чи мобільних</ListItem>
          </List>
        </Slide>

        <Slide>
          <Text textColor="quarternary">Основні гравці:</Text>
          <Image src={vrHeadsetsTable} width="100%"/>
        </Slide>

        <Slide>
          <Image src={googleCardboard} height="60vh"/>
          <Heading size={2}>Google Cardboard</Heading>
        </Slide>

        <Slide>
          <Image src={miVr} height="60vh" />
          <Heading size={2}>Xiaomi Mi VR</Heading>
        </Slide>

        <Slide>
          <Heading size={2}>Які вимоги до телефону?</Heading>
          <Appear>
            <List>
              <ListItem>Гіроскоп</ListItem>
              <ListItem>Дисплей високої чіткості</ListItem>
              <ListItem>Хороша швидкодія</ListItem>
            </List>
          </Appear>
        </Slide>

        <Slide>
          <Heading size={2}>Де брати VR контент?</Heading>
          <Appear>
            <List>
              <ListItem>
                <Link href="https://with.in" textColor="secondary">
                  Within
                </Link>
              </ListItem>
              <ListItem>
                <Link href="https://www.youtube.com/channel/UCzuqhhs6NWbgTzMuM09WKDQ" textColor="secondary">
                  YouTube
                </Link>
              </ListItem>
              <ListItem>
                <Link href="https://play.google.com/store" textColor="secondary">
                  PlayMarket/AppStore
                </Link>
              </ListItem>
              <Appear>
                <ListItem>PornHub</ListItem>
              </Appear>
            </List>
          </Appear>
        </Slide>

        <Slide>
          <Heading size={2}>Що з пітримкою iPhone?</Heading>
          <Appear>
            <Text textSize="3rem">P.S: Все сумно.</Text>
          </Appear>
        </Slide>

        <Slide>
          <Heading>Де можна застосовувати VR?</Heading>
        </Slide>

        <Slide>
          <Heading size={2}>Сфери застосування VR:</Heading>
          <List>
            <ListItem>Навчання</ListItem>
            <ListItem>Медицина</ListItem>
            <ListItem>Промисловість</ListItem>
            <ListItem>Відпочинок</ListItem>
            <ListItem>Торгівля</ListItem>
          </List>
        </Slide>

        <Slide>
          <Heading size={2}>Як робити сферичні фото?</Heading>
        </Slide>

        <Slide>
          <Heading size={2}>Google Street View</Heading>
        </Slide>

        <Slide>
          <Link href={`./examples/aframe-360-photo.html`} target="_blank">
            <Heading size={3} textColor="tertiary">360° Photo Demo</Heading>
          </Link>
        </Slide>

        <Slide>
          <Heading>Розповідати можна годинами…</Heading>
        </Slide>

        <Slide>
          <Heading>…але є і проблеми</Heading>
        </Slide>

        <Slide>
          <Heading size={2}>Які проблеми VR?</Heading>
          <List>
            <Appear>
              <ListItem>Ефект Motion Sickness</ListItem>
            </Appear>
            <Appear>
              <ListItem>Нудота через просідання кадрів</ListItem>
            </Appear>
            <Appear>
              <ListItem>Зернистість і розширення екранів</ListItem>
            </Appear>
            <Appear>
              <ListItem>Проблеми з єдністю керування</ListItem>
            </Appear>
            <Appear>
              <ListItem>Фулскріни в мобільних браузерах</ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide>
          <Link href="https://experiments.withgoogle.com/webvr" target="_blank">
            <Heading size={4} textColor="tertiary">experiments.withgoogle.com/webvr</Heading>
          </Link>
        </Slide>

        <Slide>
          <Link href="https://twitter.com/denysdovhan">
            <Heading>
              <S type="underline">@denysdovhan</S>
            </Heading>
          </Link>
        </Slide>

        <Slide>
          <Heading>
            Дякую за увагу!
          </Heading>
          <Text margin="1rem auto" lineHeight={1.2}>15 Oct 2017</Text>
          <Link href="#">
            <Text margin="6em auto" textSize="2rem">
              Slides: denysdovhan.com/slides-15x4-about-vr
            </Text>
          </Link>
        </Slide>
      </Deck>
    );
  }
}
