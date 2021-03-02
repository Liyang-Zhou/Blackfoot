import React from 'react';
import SoundButton from '../../components/pronounce/pronounce-item.component';
import cinema from '../../components/pronounce/sounds/cinema.wav';
import store from '../../components/pronounce/sounds/store.wav';
import water from '../../components/pronounce/sounds/water.wav';
import fish from '../../components/pronounce/sounds/fish.wav';
import bathroom from '../../components/pronounce/sounds/bathroom.wav';
import kitchen from '../../components/pronounce/sounds/kitchen.wav';
import Button from '../../components/pronounce/pronounce-buttonitem.component';
import Hello from '../../components/pronounce/sounds/hello.wav';
import HelloFriend from '../../components/pronounce/sounds/hello friend.wav';
import HowAreYou from '../../components/pronounce/sounds/how are you_.wav';
import Today from '../../components/pronounce/sounds/today.wav';
import IWillEat from '../../components/pronounce/sounds/i will eat.wav';
import apples from '../../components/pronounce/sounds/apples.wav';
import './pronounce.styles.scss';

const PronouncePage = () => (
  <div className="pronouncepage">
  <br></br>
  <p className="pro">This page have not style yet</p>
    <table>
	<tr>
        <ul class="town">
          <lh>Town</lh>
		  <td>
            <dl>
              <dt>cinema:</dt>
              <dd>
                - Aisaksittoo
                <SoundButton sound={cinema} />
              </dd>
            </dl>
            <dl>
              <dt>store</dt>
              <dd>
                - Itaohpomoapii
                <SoundButton sound={store} />
              </dd>
            </dl>
            <dl>
              <dt>club</dt>
              <dd>
                - Itaisimmioapii
                <SoundButton sound={cinema} />
              </dd>
            </dl>
        </td>

          <td>
            <dl>
              <dt>cafe</dt>
              <dd>
                - Itoiyo’pii <SoundButton sound={store} />
              </dd>
			  </dl>
			  <dl>
              <dt>house</dt>
              <dd>
                - Naapoiyiss <SoundButton sound={cinema} />
              </dd>
			  </dl>
			  <dl>
              <dt>tipi</dt>
              <dd>
                - Niitoiyiss <SoundButton sound={store} />
              </dd>
            </dl>
          </td>
          <td>
            <dl>
              <dt>movie</dt>
              <dd>
                - aisaiksisttoo
                <SoundButton sound={cinema} />
              </dd>
            </dl>
          </td>
		  </ul>
		  </tr>



      <tr>
        <ul class="home">
          <lh>Home</lh>
          <td>
            <dl>
              <dt>bathroom</dt>
              <dd>
                - Makapoiyiss <SoundButton sound={bathroom} />
              </dd>
              <dt>kitchen</dt>
              <dd>
                - Itoiyo’soap <SoundButton sound={kitchen} />
              </dd>
              <dt>car</dt>
              <dd>
                - Aiksistomatomahka <SoundButton sound={bathroom} />
              </dd>
            </dl>
          </td>
          <td>
            <dl>
              <dt>door</dt>
              <dd>
                - Kitsim <SoundButton sound={kitchen} />
              </dd>
              <dt>elevator</dt>
              <dd>
                - Aisspaohpii <SoundButton sound={bathroom} />
              </dd>
              <dt>window</dt>
              <dd>
                - Ksisstsikomstan <SoundButton sound={kitchen} />
              </dd>
            </dl>
          </td>
          <td>
            <dl>
              <dt>dog</dt>
              <dd>
                - Imitaa <SoundButton sound={bathroom} />
              </dd>
            </dl>
          </td>
        </ul>
      </tr>

      <tr>
        <ul class="family">
          <lh>Family</lh>
          <td>
            <dl>
              <dt>Man</dt>
              <dd>
                - Ninaa <SoundButton sound={cinema} />
              </dd>
              <dt>Woman</dt>
              <dd>
                - Aakii <SoundButton sound={store} />
              </dd>
              <dt>Girl</dt>
              <dd>
                - Aakiikoan <SoundButton sound={cinema} />
              </dd>
            </dl>
          </td>
          <td>
            <dl>
              <dt>Boy</dt>
              <dd>
                - Saahkomaapi <SoundButton sound={store} />
              </dd>
              <dt>Mother</dt>
              <dd>
                - Iksisst <SoundButton sound={cinema} />
              </dd>
              <dt>Father</dt>
              <dd>
                - Inn <SoundButton sound={store} />
              </dd>
            </dl>
          </td>
          <td>
            <dl>
              <dt>child</dt>
              <dd>
                - pookaa <SoundButton sound={cinema} />
              </dd>
            </dl>
          </td>
        </ul>
      </tr>
      <tr>
        <ul class="restaurant">
          <lh>Restaurant</lh>
          <td>
            <dl>
              <dt>water</dt>
              <dd>
                - Aohkii <SoundButton sound={water} />
              </dd>
              <dt>fish</dt>
              <dd>
                - mamii <SoundButton sound={fish} />
              </dd>
              <dt>oranges</dt>
              <dd>
                - aotahkoinammiksi <SoundButton sound={water} />
              </dd>
			  <dt>salt</dt>
              <dd>
                - isttsiksipoko <SoundButton sound={fish} />
              </dd>
            </dl>
          </td>
          <td>
            <dl>
              <dt>apples</dt>
              <dd>
                - aipasstaamiinammiksi <SoundButton sound={apples} />
              </dd>
              <dt>fries</dt>
              <dd>
                - paataakistsi <SoundButton sound={water} />
              </dd>
              <dt>burger</dt>
              <dd>
                - pikkiaaksin <SoundButton sound={fish} />
              </dd>
			  <dt>sugar</dt>
              <dd>
                - naapiiniiwan <SoundButton sound={fish} />
              </dd>
            </dl>
          </td>
          <td>
            <dl>
              <dt>dessert</dt>
              <dd>
                - pisatsoyiikan <SoundButton sound={water} />
              </dd>
              <dt>bread</dt>
              <dd>
                - napayin <SoundButton sound={fish} />
              </dd>
              <dt>tea</dt>
              <dd>
                - Siksikimmii <SoundButton sound={fish} />
              </dd>
            </dl>
          </td>
          <td>
            <dl>
              <dt>coffee</dt>
              <dd>
                - Iitapsiksikimmii <SoundButton sound={water} />
              </dd>
              <dt>eggs</dt>
              <dd>
                - owaistsi <SoundButton sound={fish} />
              </dd>
              <dt>meat</dt>
              <dd>
                - i'ksisako <SoundButton sound={fish} />
              </dd>
            </dl>
          </td>
        </ul>
      </tr>
      <tr>
        <td colSpan="3">
          <ul>
            <lh class="textsound">Greetings</lh>
            <p class="textdl">
              Hello <Button sound={Hello} text={'Oki'} />
            </p>
            <p class="textdl">
              Hello friend <Button sound={HelloFriend} text={'Oki napi'} />
            </p>
            <p class="textdl">
              How are you?{' '}
              <Button sound={HowAreYou} text={'Tsa niita’piiwa?'} />
            </p>
            <p class="textdl">
              I'm doing good. You?{' '}
              <Button sound={water} text={'Tsikohssokopii. Kistoo?'} />
            </p>
            <p class="textdl">
              Not too bad <Button sound={water} text={'Matohkwiikii'} />
            </p>
            <p class="textdl">
              Let's go <Button sound={water} text={'Okí'} />
            </p>
            <p class="textdl">
              Yes <Button sound={water} text={'Aa'} />
            </p>
            <p class="textdl">
              No <Button sound={water} text={'Saa'} />
            </p>
          </ul>
        </td>
      </tr>
      <tr>
        <td colSpan="3">
          <ul>
            <lh class="textsound">Time</lh>
            <p class="textdl">
              Today <Button sound={Today} text={'Annohk'} />
            </p>
            <p class="textdl">
              This morning{' '}
              <Button sound={HelloFriend} text={'Ksisskanaotonni'} />
            </p>
            <p class="textdl">
              Tomorrow <Button sound={HowAreYou} text={'Aapinakos'} />
            </p>
            <p class="textdl">
              This evening <Button sound={water} text={'otakosi'} />
            </p>
          </ul>
        </td>
      </tr>
      <tr>
        <td colSpan="3">
          <ul >
            <lh class="textsound">Verb</lh>
            <p class="textdl">
              I will go <Button sound={Hello} text={'Nitaakitapoo'} />
            </p>
            <p class="textdl">
              I will eat <Button sound={IWillEat} text={'Nitaaksoyi'} />
            </p>
            <p class="textdl">
              and <Button sound={HowAreYou} text={'Niitsitapo'} />
            </p>
            <p class="textdl">
              please pass the <Button sound={water} text={'kipahkokkit'} />
            </p>
            <p class="textdl">
              where <Button sound={HelloFriend} text={'tsima'} />
            </p>
            <p class="textdl">
              who <Button sound={HowAreYou} text={'takaa'} />
            </p>
            <p class="textdl">
              yesterday <Button sound={water} text={'matonni'} />
            </p>
          </ul>
        </td>
      </tr>
    </table>
  </div>
);

export default PronouncePage;
