# React Temeller

#### Dosya Yapısı
extensions
-ES7+ React/Redux/React-Native snippets
v4.4.3
dsznajder
-Auto Rename Tag
v0.1.10
Jun Han
-------------------------------------------------
-.next
Proje başlatıldıktan sonra, .nextprojenizi hızlandırmak için sayfa önbelleğini ve bazı özellikleri saklamak için bu klasörü oluşturulacaktır

- node_modules
  Uygulamanın gerektirdiği tüm bağımlılıkları içerir. Ayrıca package.json'da listelenen ana bağımlılıklarda bulunur

- public
  -svg logolar
  -favicon

- src
  Bütün çalışmalarımızı burada yapacağız. src/index.js JavaScript giriş noktasıdır.
  -styles, stil dosyalarımızdan oluşur
- .gitignore
  Kaynak denetiminin (Git) hangi dosyaları yoksayması gerektiğini belirtir

- package.json
  Her Node.js projesinin bir package.json dosyası vardır ve bu, projemiz hakkında, örneğin bağımlılıklar ve script dosyaları listesi gibi bilgiler içerir.

- package-lock.json
  Tüm bağımlılıkların anlık görüntüsü

-jsconfig.json
Metin düzenleyicinize yardımcı olacak bir yapılandırma dosyasıdır.

-next.config.js
Next.js'nin özel gelişmiş yapılandırması için kullanılır

- README.md
  Proje hakkında daha fazla bilgi paylaşabileceğiniz işaretleme dosyası, örneğin talimatlar ve özet

#### Şablonları Kaldırın

- src/app içerisinde;
  -layout.js ile
  -page.js haricindekileri silebiliriz.

#### next.config.json düzenlemesi

const nextConfig = {
reactStrictMode: true,
swcMinify: true,
experimental: {
appDir:true
}
}

#### İlk Bileşen

```js
function First() {
  return <h2>İlk Bileşenim</h2>
}
//JSX Javascript Syntax Extension  --> HTML alike
// arrow function

const First = () => {
  return <h2>İlk Bileşenim</h2>
}
```

- Büyük harfle başlar
- JSX (html) döndürmelidir
- Her zaman <First/> etiketini kapatmalıyız

##### Tipik bir Bileşen

```js
const First = () => {
  return <h2>İlk Bileşenim</h2>
}
export default First
```

##### Next.js Primitive Component

page.js

```js
function First() {
  return <h2>İlk Bileşenim</h2>
}
```

#### settings

settings.json

```json
  "editor.formatOnPaste": true,
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
    "prettier.singleQuote": true,
    "prettier.semi": false,
```

- Emmet

settings.json

```json
"emmet.includeLanguages": {
    "javascript": "javascriptreact"
  },
```

- ES7 Snippets
  - rafce (arrow func & export)
  - rfce (regular func & export )
  - dosya ismi ile aynı
  - react auto import
    - React Snippets › Settings: Import React On Top

#### Ayrıntılı Olarak İlk Bileşen

- büyük harf
- bir şey return etmeli
- JSX syntax(return html)
  - hayatımızı kolaylaştırmak için

#### JSX Kuralları

- tek öğe döndürür (bir ana öğe)

  - semantik section/article
  - Fragment - fazladan node eklemeden öğeleri gruplar

```js
return <React.Fragment>...return'un geri kalanı</React.Fragment>

// kısayol

return <>...return'un geri kalanı</>
```

- camelCase adlandırma kuralı

```js
return (
  <div tabIndex={1}>
    <button onClick={func}>click me</button>
    <label htmlFor='name'>Name</label>
    <input readOnly={true} id='name' />
  </div>
)
// in html
<div tabindex="1">
    <button onclick="myFunction()">click me</button>
    <label for='name'>Name</label>
    <input readonly id='name' />
</div>
```

- class yerine className

```js
return <div className='container'>hello</div>
```

- her elementi kapat

```js
return <img />
// ya da
return <input />
```

- format
  - return veya () ile aynı satırda açılış etiketi

```js
function First() {
  return (
    <>
      <div className='container'>
        <h3>hello </h3>
        <ul>
          <li>
            <a href='#'>hello world</a>
          </li>
        </ul>
      </div>
      <h2>hello world</h2>
      <input type='text' name='' id='' />
    </>
  )
}
```

#### İç İçe Bileşenler

```js
function First() {
  return (
    <div>
      <Second />
      <Third />
    </div>
  )
}

const Second = () => <h2>Namık Korona</h2>
const Third = () => {
  return <p>Bu benim mesajım</p>
}
```

#### Yemek Sipariş Listesi

- setup

```js
function FoodOrder() {
  return (
    <section>
      <Food />
      <Food />
      <Food />
    </section>
  )
}

const Food = () => {
  return (
    <article>
      <Image />
      <Order />
      <Store />
    </article>
  )
}

const Image = () => <h2>image placeholder</h2>
const Order = () => {
  return <h2>Food Order</h2>
}
const Store = () => <h4>Store</h4>
```

- arama motoruna - 'yemek sepeti istanbul'
  [yemeksepeti.com](https://www.yemeksepeti.com/city/istanbul)
- yemeği seçin
- resmini, ismini ve lokantayı kopyalayın

```js
function FoodOrder() {
  return (
    <section>
      <Food />
      <Food />
      <Food />
      <Food />
    </section>
  )
}

const Food = () => {
  return (
    <article className='Food'>
      <Image />
      <Order />
      <Store />
    </article>
  )
}

const Image = () => (
  <img
    src='https://images.deliveryhero.io/image/fd-tr/LH/zw8k-hero.jpg?width=200&height=200&quality=45'
    alt='salad'
  />
)
const Order = () => {
  return <h2>Salad</h2>
}
const Store = () => <h4>Let's Salad</h4>
```

#### CSS

- global.css --> src/styles

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background: #f1f5f8;
  color: #222;
}
```

```js
function FoodOrder() {
  return (
    <section className='foodOrder'>
      <Food />
      <Food />
      <Food />
      <Food />
    </section>
  )
}

const Food = () => {
  return (
    <article className='food'>
      <Image />
      <Order />
      <Store />
    </article>
  )
}
```

- complete css

```css
.foodOrder {
  width: 90vw;
  max-width: 1170px;
  margin: 5rem auto;
  display: flex;
  gap: 2rem;
}

@media screen and (min-width: 768px) {
  .foodOrder {
    flex-wrap: wrap;
    flex: 1 1 150px;
  }
}
.food {
  background: #fff;
  border-radius: 1rem;
  padding: 2rem;
  text-align: center;
}
.food img {
  width: 100%;
  object-fit: cover;
}
.food h2 {
  margin-top: 1rem;
  font-size: 1rem;
}
```

#### JSX - CSS (inline styles)

- JSX'te {}, JS'e geri dönmek anlamına gelir
- değer, anahtar/değer çiftine sahip bir nesnedir ---büyük harfle ve '' " ile

```js
const Store = () => (
  <h4 style={{ color: '#617d98', fontSize: '0.75rem', marginTop: '0.5rem' }}>
    Let's Salad
  </h4>
)
```

- css kuralları(inline vs external css)

```css
.food h4 {
  /* çalışmaz */
  color: red;
  /* çalışır */
  letter-spacing: 2px;
}
```

- harici kütüphaneler satır içi css kullanır,
  yani bazı değişiklikler yapmak istiyorsanız,
  kütüphane dokümanlarına ve elements sekmesine başvurmanız gerekir

- alternatif seçenek

```js
const Store = () => {
  const inlineHeadingStyles = {
    color: '#617d98',
    fontSize: '0.75rem',
    marginTop: '0.5rem',
  }
  return <h4 style={inlineHeadingStyles}>Let's Salad </h4>
}
```

- FARKLI YAKLAŞIMLAR MEVCUT !!!
- SONUÇ AYNI OLDUĞU SÜRECE İSTEDİĞİNİZİ TERCİH EDEBİLİRSİNİZ!!!!

#### JSX - Javascript

- tek Food component yeniden düzenleme (kişisel tercih)
- satır içi css'yi kaldır

```js
const Food = () => {
  return (
    <article className='food'>
      <img src='./images/food-1.jpg' alt='salad' />
      <h2>Yemek Siparişi</h2>
      <h4>Let's Salad</h4>
    </article>
  )
}
```

```css
.food h4 {
  color: #617d98;
  font-size: 0.75rem;
  margin-top: 0.5rem;
  letter-spacing: 2px;
}
```

- JSX'te {}, JS 'e geri dönmek anlamına gelir
- içindeki değer bir ifade/expression olmalıdır (dönüş değeri),
  bir açıklama/statement olamaz

```js
const storeName = 'KaraFırın'
const Food = () => {
  const foodName = 'Ekmek'
  return (
    <article className='Food'>
      <img src='./images/food-1.jpg' alt='ekmek çeşitleri' />
      <h2>{foodName}</h2>
      <h4>{storeName} </h4>
      {/* <p>{let x = 6}</p> */}
      <p>{6 + 6}</p>
    </article>
  )
}
```

- satır yorumunu değiştir / Satır Yorumunu Değiştir

#### Props - Başlangıç Setup

- refactor/temizle

```js
const storeName = 'KaraFırın'
const foodName = 'Ekmek'
const img = './images/food-1.jpg'

function FoodOrder() {
  return (
    <section className='foodOrder'>
      <Food />
      <Food />
    </section>
  )
}
const Food = () => {
  return (
    <article className='food'>
      <img src={img} alt={foodName} />
      <h2>{foodName}</h2>
      <h4>{storeName}</h4>
    </article>
  )
}
```

```js
// parametreler
const someFunc = (param1, param2) => {
  console.log(param1, param2)
}
// argümanlar
someFunc('iş', 'developer')
```

```js
const Food = (props) => {
  console.log(props)
  return (
    <article className='food'>
      <img src={img} alt={foodName} />
      <h2>{foodName}</h2>
      <h4>{storeName}</h4>
    </article>
  )
}
```

- props nesnesi, props çağırma kuralı, istediğimiz ismi verebilirsiniz

- anahtar/değer çiftleri olarak geçirin
- prop varsa değer döndürür, aksi takdirde değer döndürmez

```js
function FoodOrder() {
  return (
    <section className='foodOrder'>
      <Food job='developer' />
      <Food foodName='rastele sipariş' number={22} />
    </section>
  )
}
const Food = (props) => {
  console.log(props)
  return (
    <article className='Food'>
      <img src={img} alt={foodName} />
      <h2>{foodName}</h2>
      <h4>{storeName} </h4>
      <p>{props.job}</p>
      <p>{props.foodName}</p>
      <p>{props.number}</p>
    </article>
  )
}
```

```js
function FoodOrder() {
  return (
    <section className='foodOrder'>
      <Food storeName={storeName} foodName={foodName} img={img} />
      <Food storeName={storeName} img={img} />
    </section>
  )
}
const Food = (props) => {
  console.log(props)
  return (
    <article className='food'>
      <img src={props.img} alt={props.foodName} />
      <h2>{props.foodName}</h2>
      <h4>{props.storeName} </h4>
    </article>
  )
}
```

#### Props- Dinamik Kurulum

- Nesne ayarla
- refactor- özelliklere göre değişir
- kopyala/yapıştır ve yeniden adlandır
- ikinci food için değerleri al
- prop kurulumu

```js
const firstFood = {
  storeName: 'Lets Salad',
  foodName: 'Salad',
  img: './images/food-1.jpg',
}
const secondFood = {
  storeName: 'KaraFırın',
  foodName: 'Ekmek',
  img: 'https://images.deliveryhero.io/image/fd-tr/LH/zw8k-hero.jpg?width=200&height=200&quality=45',
}

function FoodOrder() {
  return (
    <section className='foodOrder'>
      <Food
        storeName={firstFood.storeName}
        foodName={firstFood.foodName}
        img={firstFood.img}
      />
      <Food
        storeName={secondFood.storeName}
        foodName={secondFood.foodName}
        img={secondFood.img}
      />
    </section>
  )
}
const Food = (props) => {
  console.log(props)
  return (
    <article className='Food'>
      <img src={props.img} alt={props.foodName} />
      <h2>{props.foodName}</h2>
      <h4>{props.storeName} </h4>
    </article>
  )
}
```

#### Proplara Erişim - Çoklu Yaklaşımlar

- doğru ya da yanlış yok - sadece tercih!!!

- Destructuring (object)

- Vanilla JS'de destructure
- zamandan/yazmaktan tasarruf sağlar
- özellikleri çıkarın
- artık nesneye başvurmaya gerek yok

```js
const object = {
  name: 'murat',
  job: 'developer',
  location: 'istanbul',
}

console.log(object.name)
const { name, job } = object
console.log(job)
```

- tüm props.propName'e gerek yok
- bileşenin içindeki yapılandırma

```js
const Food = (props) => {
  const { img, foodName, storeName } = props
  return (
    <article className='Food'>
      <img src={img} alt={foodName} />
      <h2>{foodName}</h2>
      <h4>{storeName} </h4>
    </article>
  )
}
```

- fonksiyon parametrelerinde yapılandırma (bizim durumumuzda props)
- eğer console.log(props) yazarsanız - tanımlanmayacaktır

```js
const Food = ({ img, foodName, storeName }) => {
  return (
    <article className='food'>
      <img src={img} alt={foodName} />
      <h2>{foodName}</h2>
      <h4>{storeName} </h4>
    </article>
  )
}
```

#### Children Prop

- bileşen etiketleri arasında oluşturduğumuz her şey
- çoğunlukla Context API'da kullanılır
- özel prop, "children" olmalıdır
- JSX'te herhangi bir yere yerleştirilebilir

```js
function FoodOrder() {
  return (
    <section className='foodOrder'>
      <Food
        storeName={firstFood.storeName}
        foodName={firstFood.foodName}
        img={firstFood.img}
      >
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque
          repudiandae inventore eos qui animi sed iusto alias eius ea sapiente.
        </p>
        <button>click me</button>
      </Food>
      <Food
        storeName={secondFood.storeName}
        foodName={secondFood.foodName}
        img={secondFood.img}
      />
    </section>
  )
}

const Food = ({ img, foodName, storeName, children }) => {
  // geri kalan mantık burada
}
const Food = (props) => {
  const { img, foodName, storeName, children } = props
  console.log(props)
  return (
    <article className='Food'>
      <img src={img} alt={foodName} />
      <h2>{foodName}</h2>
      <h4>{storeName} </h4>
      {children}
    </article>
  )
}
```

- opsiyonel grid layout

```css
@media screen and (min-width: 768px) {
  .foodOrder {
    grid-template-columns: repeat(3, 1fr);
    align-items: start;
  }
}
.food p {
  margin: 1rem 0 0.5rem;
}
```

#### Basit Listeleme

- refactor

```js
const foods = [
  {
    storeName: 'KaraFırın',
    foodName: 'Ekmek',
    img: 'https://images.deliveryhero.io/image/fd-tr/LH/zw8k-hero.jpg?width=200&height=200&quality=45',
  },
  {
    storeName: 'Lets Salad',
    foodName: 'Salad',
    img: 'https://images.deliveryhero.io/image/fd-tr/LH/h9q5-hero.jpg?width=200&height=200&quality=45',
  },
]

function FoodOrder() {
  return <section className='foodOrder'>{foods}</section>
}

const Food = (props) => {
  const { img, foodName, storeName } = props

  return (
    <article className='food'>
      <img src={img} alt={foodName} />
      <h2>{foodName}</h2>
      <h4>{storeName} </h4>
    </article>
  )
}
```

- nesneler React içerisinde render edilmez

```js
function FoodOrder() {
  return <section className='foodOrder'>{foods}</section>
}
```

- map - her dizi öğesi için bir işlev çağırarak yeni bir dizi oluşturur.

```js
const names = ['murat', 'namık', 'eda']
const newNames = names.map((name) => {
  console.log(name)
  return <h1>{name}</h1>
})

function FoodOrder() {
  return <section className='foodOrder'>{newNames}</section>
}
```

#### Uygun Listeleme

- names ve newNames kaldırın

```js
function FoodOrder() {
  return (
    <section className='foodOrder'>
      {foods.map((food) => {
        console.log(food)
        return (
          <div>
            <h2>{food.foodName}</h2>
          </div>
        )
      })}
    </section>
  )
}
```

- render component
- özellikleri tek tek iletin

```js
function FoodOrder() {
  return (
    <section className='foodOrder'>
      {foods.map((food) => {
        console.log(food)
        const { img, foodName, storeName } = food
        return <Food img={img} foodName={foodName} storeName={storeName} />
      })}
    </section>
  )
}
```

#### Key Prop

- id

```js
const foods = [
  {
    storeName: 'KaraFırın',
    foodName: 'Ekmek',
    img: 'https://images.deliveryhero.io/image/fd-tr/LH/zw8k-hero.jpg?width=200&height=200&quality=45',
  },
  {
    storeName: 'Lets Salad',
    foodName: 'Salad',
    img: 'https://images.deliveryhero.io/image/fd-tr/LH/h9q5-hero.jpg?width=200&height=200&quality=45',
  },
]

function FoodOrder() {
  return (
    <section className='foodOrder'>
      {foods.map((food) => {
        console.log(food)
        const { img, foodName, storeName, id } = food
        return <Food food={food} key={id} />
      })}
    </section>
  )
}
```

- bazı kodlarda key olarak indeks göreceksiniz ancak liste değişiyorsa tavsiye edilmez

```js
function FoodOrder() {
  return (
    <section className='foodOrder'>
      {foods.map((food, index) => {
        console.log(food)
        const { img, foodName, storeName, id } = food
        return <Food food={food} key={index} />
      })}
    </section>
  )
}
```

#### Bütün Nesneyi İlet

- render component
- bütün nesneyi ilet
- Destructuring (object)

```js
function FoodOrder() {
  return (
    <section className='foodOrder'>
      {foods.map((food) => {
        console.log(food)
        const { img, foodName, storeName } = food
        return <Food food={food} />
      })}
    </section>
  )
}

const Food = (props) => {
  const { img, foodName, storeName } = props.food

  return (
    <article className='food'>
      <img src={img} alt={foodName} />
      <h2>{foodName}</h2>
      <h4>{storeName} </h4>
    </article>
  )
}
```

- alternatif

```js
const Food = ({ food: { img, foodName, storeName } }) => {
  return (
    <article className='food'>
      <img src={img} alt={foodName} />
      <h2>{foodName}</h2>
      <h4>{storeName} </h4>
    </article>
  )
}
```

#### Diğer Yöntem

- spread operator (...) - değerleri kopyalar

```js
const friends = ['murat', 'namık', 'eda']
const newFriends = [...friends, 'engin']
console.log(friends)
console.log(newFriends)
const object = {
  name: 'murat',
  job: 'developer',
}

const newObject = { ...object, location: 'istanbul' }
console.log(object)
console.log(newObject)
```

```js
function FoodOrder() {
  return (
    <section className='foodOrder'>
      {foods.map((food) => {
        return <Food {...food} key={food.id} />
      })}
    </section>
  )
}

const Food = (props) => {
  const { img, foodName, storeName } = props
  return (
    <article className='Food'>
      <img src={img} alt={foodName} />
      <h2>{foodName}</h2>
      <h4>{storeName} </h4>
    </article>
  )
}
const Food = ({ img, foodName, storeName }) => {
  // rest of the code
}
```

#### Events - Temeller

- Vanilla JS

```js
const btn = document.getElementById('btn')

btn.addEventListener('click', function (e) {
  // olay nesnesine erişim
  // olay ateşlendiğinde bir şeyler yap
})
```

- aynı yaklaşım
- element, event, function
- yine camelCase

```js
const EventExamples = () => {
  const handleButtonClick = () => {
    alert('handle button click')
  }
  return (
    <section>
      <button onClick={handleButtonClick}>click me</button>
    </section>
  )
}
```

- [React Events](https://react.dev/reference/react-dom/components/common#react-event-object)
- onları ezberlemeye gerek yok (fikir aynı)
- sık kullanılanlar
  - onClick (click events)
  - onSubmit (submit form )
  - onChange (input change )

```js
function FoodOrder() {
  return (
    <section className='foodOrder'>
      <EventExamples />
      {foods.map((food) => {
        return <Food {...food} key={food.id} />
      })}
    </section>
  )
}

const EventExamples = () => {
  const handleFormInput = () => {
    console.log('handle form input')
  }
  const handleButtonClick = () => {
    alert('handle button click')
  }
  return (
    <section>
      <form>
        <h2>Typical Form</h2>
        <input
          type='text'
          name='example'
          onChange={handleFormInput}
          style={{ margin: '1rem 0' }}
        />
      </form>
      <button onClick={handleButtonClick}>click me</button>
    </section>
  )
}
```

#### Event Object & Form Submission

```js
const EventExamples = () => {
  const handleFormInput = (e) => {
    console.log(e)
    // e.target - element
    console.log(`Input Name : ${e.target.name}`)
    console.log(`Input Value : ${e.target.value}`)
    // console.log('handle form input');
  }
  const handleButtonClick = () => {
    alert('handle button click')
  }
  const handleFormSubmission = (e) => {
    e.preventDefault()
    console.log('form submitted')
  }
  return (
    <section>
      {/*  onSubmit Event Handler  ekle*/}
      <form onSubmit={handleFormSubmission}>
        <h2>Typical Form</h2>
        <input
          type='text'
          name='example'
          onChange={handleFormInput}
          style={{ margin: '1rem 0' }}
        />
        {/*  type='submit' buton ekle*/}
        <button type='submit'>submit form</button>
      </form>
      <button onClick={handleButtonClick}>click me</button>
    </section>
  )
}
```

- alternatif yaklaşım

```js
<button type='submit' onClick={handleFormSubmission}>
  submit form
</button>
```

#### Beyin Fırtınası

- Alternatif yaklaşım
- anonim işlevi ilet (bu durumda ok işlevi)
- bir satır - daha az kod

```js
const EventExamples = () => {
  return (
    <section>
      <button onClick={() => console.log('hello ')}>click me</button>
    </section>
  )
}
```

- ayrıca olay nesnesine erişebilir

```js
const EventExamples = () => {
  return (
    <section>
      <form>
        <h2>Tipik Form</h2>
        <input
          type='text'
          name='example'
          onChange={(e) => console.log(e.target.value)}
          style={{ margin: '1rem 0' }}
        />
      </form>
      <button onClick={() => console.log('tıkladın')}>click me</button>
    </section>
  )
}
```

#### Beyin Fırtınası #2

- EventsExamples kaldır
- bileşenler varsayılan olarak bağımsızdır.

```js
function FoodOrder() {
  return (
    <section className='foodOrder'>
      {foods.map((food) => {
        return <Food {...food} key={food.id} />
      })}
    </section>
  )
}

const Food = (props) => {
  const { img, foodName, storeName } = props
  const displayTitle = () => {
    console.log(foodName)
  }

  return (
    <article className='Food'>
      <img src={img} alt={foodName} />
      <h2>{foodName}</h2>
      <button onClick={displayTitle}>display foodName</button>
      <h4>{storeName} </h4>
    </article>
  )
}
```

- button'u kaldır

#### Prop Drilling

- react veri akışı - yalnızca proplarla aktarabilir
- alternatifler Context API'si, redux, diğer state kütüphaneleri

```js
function FoodOrder() {
  const someValue = 'muzluSüt'
  const displayValue = () => {
    console.log(someValue)
  }
  return (
    <section className='foodOrder'>
      {foods.map((food) => {
        return <Food {...food} key={food.id} displayValue={displayValue} />
      })}
    </section>
  )
}

const Food = (props) => {
  const { img, foodName, storeName, displayValue } = props

  return (
    <article className='Food'>
      <img src={img} alt={foodName} />
      <h2>{foodName}</h2>
      <button onClick={displayValue}>click me</button>
      <h4>{storeName} </h4>
    </article>
  )
}
```

#### Karışık Örnek

- ilk kurulum
- foodOrder içerisinde getFood işlevi oluşturun
- id'yi argüman olarak kabul eder ve food buluyor

- Fonksiyonu, Food Bileşenine iletin ve buton tıklamasıyla çağırın
- Food Bileşeninde id ve fonksiyonu parçalayın
- kullanıcı butona tıkladığında işlevi çağırın, id iletin
- amaç : aynı yemeği konsolda görmelisiniz

```js
const FoodOrder = () => {
  const getFood = (id) => {
    const food = foods.find((food) => food.id === id)
    console.log(food)
  }

  return (
    <section className='foodOrder'>
      {foods.map((food) => {
        return <Food {...food} key={food.id} getFood={getFood} />
      })}
    </section>
  )
}

const Food = (props) => {
  const { img, foodName, storeName, getFood, id } = props
  // console.log(props);

  return (
    <article className='Food'>
      <img src={img} alt={foodName} />
      <h2>{foodName}</h2>
      {/* this is not going to work */}
      <button onClick={getFood(id)}>display foodName</button>
      <h4>{storeName}</h4>
    </article>
  )
}
```

- iki düzeltme
- ilk seçenek - kapsayıcı setup

```js
const Food = (props) => {
  const { img, foodName, storeName, getFood, id } = props
  // console.log(props);
  const getSingleFood = () => {
    getFood(id)
  }
  return (
    <article className='Food'>
      <img src={img} alt={foodName} />
      <h2>{foodName}</h2>
      <button onClick={getSingleFood}>display foodName</button>
      <h4>{storeName}</h4>
    </article>
  )
}
```

- ikinci düzeltme
- ikinci seçenek - anonim ok işlevine sarın

```js
const Food = (props) => {
  const { img, foodName, storeName, getFood, id } = props
  // console.log(props);
  const getSingleFood = () => {
    getFood(id)
  }
  return (
    <article className='food'>
      <img src={img} alt={foodName} />
      <h2>{foodName}</h2>

      <button onClick={() => getFood(id)}>display foodName</button>
      <h4>{storeName}</h4>
    </article>
  )
}
```

#### Import & Export

- getFood kodlarının hepsini sielim

```js
function FoodOrder() {
  return (
    <section className='foodOrder'>
      {foods.map((food) => {
        return <Food {...food} key={food.id} />
      })}
    </section>
  )
}

const Food = (props) => {
  const { img, foodName, storeName } = props

  return (
    <article className='food'>
      <img src={img} alt={foodName} />
      <h2>{foodName}</h2>

      <h4>{storeName} </h4>
    </article>
  )
}
```

- src/pages foods.js ve Food.js adıyla iki dosya kurun
- index.js'den food dizisini kesin
  -foods.js'ye ekleyin

  foods.js

```js
const foods = [
  {
    storeName: 'KaraFırın',
    foodName: 'Ekmek',
    img: 'https://images.deliveryhero.io/image/fd-tr/LH/zw8k-hero.jpg?width=200&height=200&quality=45',
    id: 1,
  },
  {
    storeName: 'Lets Salad',
    foodName: 'Salad',
    img: 'https://images.deliveryhero.io/image/fd-tr/LH/h9q5-hero.jpg?width=200&height=200&quality=45',
    id: 2,
  },
]
```

- iki çeşit dışa aktarma: adlandırılmış ve varsayılan

  - adlandırılmış dışa aktarma adlarıyla eşleşmelidir ZORUNLU
  - varsayılan dışa aktarmalarla, yeniden adlandırılabilir ancak dosya başına yalnızca bir tane

- adlandırılmış export

```js
export const foods = [
  {
    storeName: 'KaraFırın',
    foodName: 'Ekmek',
    img: 'https://images.deliveryhero.io/image/fd-tr/LH/zw8k-hero.jpg?width=200&height=200&quality=45',
    id: 1,
  },
  {
    storeName: 'Lets Salad',
    foodName: 'Salad',
    img: 'https://images.deliveryhero.io/image/fd-tr/LH/h9q5-hero.jpg?width=200&height=200&quality=45',
    id: 2,
  },
]
```

index.js

```js
import { foods } from './Foods'
```

- default export

```js
const Food = (props) => {
  const { img, foodName, storeName } = props

  return (
    <article className='food'>
      <img src={img} alt={foodName} />
      <h2>{foodName}</h2>

      <h4>{storeName} </h4>
    </article>
  )
}

export default Food
```

index.js

```js
import Food from './food'
```

#### Local Image (src folder)

- optimize edildiğinden daha iyi performans
- diziye bir kitap daha ekle
- üç görüntüyü de indirin (yeniden adlandırın)
- src'deki images klasörü kurulumu
- üç resmi de foods.js'ye aktarın
- resim özelliğini içe aktarmaya eşit olarak ayarla
- ve evet, her görüntü için yeni içe import gerekir

```js
import img1 from '../../public/image/food-1.jpg'
import img2 from '../../public/image/food-2.jpg'

export const foods = [
  {
    storeName: 'KaraFırın',
    foodName: 'Ekmek',
    img: img1,
    id: 1,
  },
  {
    storeName: 'Lets Salad',
    foodName: 'Salad',
    img: img2,
    id: 2,
  },
]
```

#### Başlık Ekle

- uygulamamıza bir başlık ekleyin (isteğe bağlı css)
- sayfa başlığını değiştir

index.js

```js
function FoodOrder() {
  return (
    <>
      <h1>Sipariş Listesi</h1>
      <section className='foodOrder'>
        {foods.map((food) => {
          return <Food {...food} key={food.id} />
        })}
      </section>
    </>
  )
}
```

index.css

```css
h1 {
  text-align: center;
  margin-top: 4rem;
  text-transform: capitalize;
}
```
