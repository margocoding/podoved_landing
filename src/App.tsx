import { useState } from 'react';
import {
  Menu,
  X,
  BadgeCheck,
  Star,
  ArrowRight,
  ShieldCheck,
  FlaskConical,
  Clock,
  BookOpen,
  Globe,
  Sparkles,
  AlertCircle,
  Droplets,
  Pencil,
  Home,
  Phone,
  Send,
  MessageSquare,
  Users,
  CheckCircle2,
} from 'lucide-react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activePriceCategory, setActivePriceCategory] = useState('pedicure');

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#FCFAF7] font-sans text-stone-800 antialiased selection:bg-emerald-200 selection:text-emerald-900">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700&display=swap');
        .font-serif { font-family: 'Playfair Display', serif; }
        .font-sans { font-family: 'Inter', sans-serif; }
      `}</style>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-[#FCFAF7]/90 backdrop-blur-md border-b border-stone-200/60 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <div className="w-9 h-9 bg-emerald-900 rounded-full flex items-center justify-center">
                <span className="text-[#FCFAF7] font-serif font-bold text-sm">VB</span>
              </div>
              <span className="font-serif font-bold text-stone-900 text-xl tracking-tight">PodoVed</span>
            </div>

            <div className="hidden md:flex items-center gap-8">
              {['О специалисте', 'Услуги', 'Отзывы', 'Прайс-лист', 'Скидки'].map((item, idx) => {
                const ids = ['about', 'services', 'reviews', 'prices', 'discounts'];
                return (
                  <button
                    key={item}
                    onClick={() => scrollToSection(ids[idx])}
                    className="text-stone-600 hover:text-emerald-900 transition-colors text-sm font-semibold tracking-wide"
                  >
                    {item}
                  </button>
                );
              })}
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-emerald-900 text-[#FCFAF7] px-6 py-2.5 rounded-full text-sm font-bold hover:bg-emerald-800 transition-all shadow-sm"
              >
                Записаться
              </button>
            </div>

            <button
              className="md:hidden p-2 text-stone-600"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-[#FCFAF7] border-t border-stone-200">
            <div className="px-4 py-6 space-y-1">
              {[
                { label: 'О специалисте', id: 'about' },
                { label: 'Услуги', id: 'services' },
                { label: 'Отзывы', id: 'reviews' },
                { label: 'Прайс-лист', id: 'prices' },
                { label: 'Скидки', id: 'discounts' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left text-stone-700 hover:text-emerald-900 py-3 text-base font-semibold border-b border-stone-100 last:border-0"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('contact')}
                className="mt-4 block w-full bg-emerald-900 text-[#FCFAF7] px-5 py-3 rounded-full text-center font-bold"
              >
                Записаться на приём
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}

      <section className="pt-5">
        <div className="relative overflow-hidden bg-[#FCFAF7]">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-stone-200/50 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4"></div>

          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-20 w-full">
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">

              <div className="lg:col-span-7">
                <div className="flex flex-wrap items-center gap-2 mb-5">
                  <span className="inline-flex items-center gap-1.5 bg-emerald-50 border border-emerald-200/60 text-emerald-800 px-3 py-1.5 rounded-full text-[11px] font-bold tracking-wide uppercase">
                    <BadgeCheck className="w-3.5 h-3.5" />
                    Мед. образование
                  </span>
                  <span className="inline-flex items-center gap-1.5 bg-stone-100 border border-stone-200 text-stone-600 px-3 py-1.5 rounded-full text-[11px] font-bold tracking-wide uppercase">
                    <Star className="w-3.5 h-3.5" fill="currentColor" strokeWidth={0} />
                    5.0 на 2ГИС
                  </span>
                  <span className="inline-flex items-center gap-1.5 bg-stone-100 border border-stone-200 text-stone-600 px-3 py-1.5 rounded-full text-[11px] font-bold tracking-wide uppercase">
                    <Globe className="w-3.5 h-3.5" />
                    Германия
                  </span>
                </div>

                <h1 className="font-serif text-4xl sm:text-5xl lg:text-[3.2rem] font-bold text-stone-900 leading-[1.15] mb-5 tracking-tight">
                  Здоровье ваших стоп — <br className="hidden sm:block" />
                  <span className="text-emerald-800 font-extrabold italic">без компромиссов</span>
                </h1>

                <p className="text-base sm:text-lg text-stone-600 mb-6 leading-relaxed max-w-xl font-light">
                  Подолог <strong className="font-semibold text-stone-900">Веда Бирман</strong> — медицинский подход к решению деликатных проблем. Вросшие ногти, мозоли, трещины и эстетический уход — <span className="text-emerald-800 font-semibold">бережно, стерильно и с гарантией</span>.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 mb-8">
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="group bg-emerald-900 text-[#FCFAF7] px-7 py-3.5 rounded-full font-bold text-sm hover:bg-emerald-800 transition-all shadow-lg shadow-emerald-900/10 flex items-center justify-center gap-2"
                  >
                    Записаться на приём
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button
                    onClick={() => scrollToSection('prices')}
                    className="border border-stone-300 text-stone-700 px-7 py-3.5 rounded-full font-bold text-sm hover:bg-stone-50 hover:border-stone-400 transition-colors"
                  >
                    Смотреть цены
                  </button>
                </div>

                <div className="flex items-center gap-5 sm:gap-6 pt-5 border-t border-stone-200">
                  <div>
                    <div className="text-2xl font-serif font-bold text-emerald-900">18+</div>
                    <div className="text-[11px] text-stone-500 mt-0.5 tracking-wide uppercase font-semibold">лет опыта</div>
                  </div>
                  <div className="w-px h-7 bg-stone-200"></div>
                  <div>
                    <div className="text-2xl font-serif font-bold text-emerald-900">10</div>
                    <div className="text-[11px] text-stone-500 mt-0.5 tracking-wide uppercase font-semibold">лет в подологии</div>
                  </div>
                  <div className="w-px h-7 bg-stone-200"></div>
                  <div>
                    <div className="text-2xl font-serif font-bold text-emerald-900">100%</div>
                    <div className="text-[11px] text-stone-500 mt-0.5 tracking-wide uppercase font-semibold">стерильность</div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 relative">
                <div className="relative mx-auto w-full max-w-[420px] lg:ml-auto lg:mr-0">
                  <div className="absolute -top-8 -right-8 w-48 h-48 bg-emerald-200/40 rounded-full blur-3xl"></div>
                  <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-stone-300/40 rounded-full blur-3xl"></div>

                  <div className="relative aspect-[4/5] max-h-[580px] overflow-hidden rounded-[2rem] sm:rounded-[2.5rem]">
                    <img
                      src="/veda-hero.jpg"
                      alt="Веда Бирман — подолог"
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/30 via-transparent to-transparent"></div>

                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="inline-flex items-center gap-3 bg-white/95 backdrop-blur-md rounded-2xl px-4 py-3 shadow-lg">
                        <div className="w-10 h-10 bg-emerald-50 rounded-full flex items-center justify-center shrink-0">
                          <ShieldCheck className="w-5 h-5 text-emerald-700" />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-stone-900">100% стерильно</p>
                          <p className="text-xs text-stone-500 font-light">Трехступенчатая обработка</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute -z-10 top-8 -right-5 w-full h-full rounded-[2.5rem] border border-emerald-200/70"></div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>


      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-emerald-800 uppercase mb-6">
                <span className="w-8 h-px bg-emerald-800"></span>
                О специалисте
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 mb-6 leading-tight">
                Экспертный подход <br />к здоровью стоп
              </h2>
              <div className="w-16 h-1 bg-emerald-800 rounded-full"></div>
            </div>
            <div className="lg:col-span-7 space-y-5 text-stone-600 font-light leading-relaxed">
              <p>
                Забота о здоровье и красоте стоп — это не просто уход, а точная работа, где важны знания, опыт и внимание к деталям. Я помогаю решать проблемы со стопами <strong className="font-semibold text-stone-900">бережно, безопасно и надолго</strong>.
              </p>
              <p>
                Более 18 лет я в сфере эстетического ухода за стопами и руками, а с 2016 года специализируюсь именно на подологии. За это время я выстроила подход, в котором <strong className="font-semibold text-stone-900">медицинская точность сочетается с комфортом</strong> для пациента.
              </p>
              <p>
                Постоянно повышаю квалификацию, в том числе у специалистов из Германии, участвую в профильных конференциях и мастер-классах. Это значит, что в работе я использую актуальные методики и опираюсь на доказательную практику.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
            {[
              { icon: BookOpen, title: 'Образование', desc: 'Медицинское' },
              { icon: ShieldCheck, title: 'Стерильность', desc: 'Трехступенчатая' },
              { icon: Globe, title: 'Стажировки', desc: 'Германия' },
              { icon: Sparkles, title: 'Результат', desc: 'Надолго' },
            ].map((item) => (
              <div key={item.title} className="bg-[#FCFAF7] rounded-2xl p-6 border border-stone-200/60">
                <div className="w-10 h-10 rounded-lg bg-white border border-stone-200 flex items-center justify-center mb-4">
                  <item.icon className="w-5 h-5 text-emerald-800" />
                </div>
                <h3 className="font-semibold text-stone-900 mb-1 text-sm">{item.title}</h3>
                <p className="text-xs text-stone-500 font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-[#F6F3EE]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-emerald-800 uppercase mb-6">
              <span className="w-8 h-px bg-emerald-800"></span>
              Услуги
              <span className="w-8 h-px bg-emerald-800"></span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 mb-4">
              Направления работы
            </h2>
            <p className="text-stone-500 font-light max-w-xl mx-auto">
              Комплексный подход к здоровью ваших стоп — от профилактики до решения сложных проблем
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: FlaskConical, title: 'Аппаратный педикюр', desc: 'Профессиональная обработка стоп для проблемных ног с учётом категории сложности' },
              { icon: AlertCircle, title: 'Вросший ноготь', desc: 'Коррекционные системы: Титановая нить, LIGHT SYSTEM, Podostripe. Безболезненное решение проблемы' },
              { icon: Droplets, title: 'Стержневые мозоли', desc: 'Удаление стержневых и межпальцевых мозолей с разгрузкой проблемной зоны' },
              { icon: Pencil, title: 'Трещины на стопах', desc: 'Обработка ороговевшей кожи подошвенной части стопы, устранение дискомфорта' },
              { icon: Sparkles, title: 'Маникюр', desc: 'Аппаратный и обрезной маникюр, покрытие гель-лаком, дип-система, наращивание' },
              { icon: Home, title: 'Выезд на дом', desc: 'Для людей с ограниченными возможностями по передвижению. Полный комплект оборудования' },
            ].map((service) => (
              <div
                key={service.title}
                className="group bg-white rounded-2xl p-7 border border-stone-200/60 hover:border-emerald-200 hover:shadow-[0_4px_20px_-4px_rgba(6,78,59,0.08)] transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center mb-5 group-hover:bg-emerald-100 transition-colors">
                  <service.icon className="w-6 h-6 text-emerald-800" />
                </div>
                <h3 className="font-serif text-lg font-bold text-stone-900 mb-2">{service.title}</h3>
                <p className="text-sm text-stone-500 font-light leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-stone-100 text-stone-700 px-4 py-1.5 rounded-full text-xs font-bold tracking-wide mb-6">
              <Star className="w-3.5 h-3.5 text-amber-500" fill="currentColor" strokeWidth={0} />
              5.0 из 5 — отзывы с 2ГИС
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 mb-4">
              Отзывы пациентов
            </h2>
            <div className="w-16 h-1 bg-emerald-800 rounded-full mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch">
            {[
              {
                name: 'Полина Укроп',
                date: '24 мая 2024',
                initials: 'ПУ',
                text: '«Веда Михайловна специалист от бога и с золотыми руками! Действительно лечит, а не калечит и очень располагает к себе. Ценник приемлемый, результат заметный, а мастер очень доброжелательный и приветливый 🥰 Из ужаса мои пальчики начинают походить на что-то человеческое, спасибо вам 😁😁»',
              },
              {
                name: 'Антонина Черепанова',
                date: '25 марта 2023',
                initials: 'АЧ',
                text: '«Коллектив очень доброжелательный. Хочу поблагодарить специалиста Веду Михайловну. Это мастер своего дела. Осталось хорошее впечатление от посещения этого центра.»',
              },
              {
                name: 'Светлана Самойлова',
                date: '25 марта 2023',
                initials: 'СС',
                text: '«Добрый день! Несколько дней назад посетила данный центр. Сделала процедуру парамедицинский педикюр, осталась очень довольна, все было выполнено профессионально! Педикюр делала Веда, она супер мастер своего дела. Рекомендую этот центр и данного мастера.»',
              },
              {
                name: 'Ирина Можаева',
                date: '29 мая 2023',
                initials: 'ИМ',
                text: '«Добрый день))) Очень долго собиралась к специалисту по проблеме ногтей, так как стеснялась, НО всё таки решилась, пришла и ни капельки не пожалела сейчас это мой любимый кабинет и очень классный специалист в лице Веды -это просто супер спец и просто очень хороший и добрый человек)))))»',
              },
              {
                name: 'Ирина Томил...',
                date: '24 мая 2024',
                initials: 'ИТ',
                text: '«Веда, не только замечательный специалист в своём деле, но и прекрасный человек. С ней легко общаться! На приеме она всегда расскажет что будет делать, какие будут ощущения. Но это ещё не всё, после она всегда поинтересуется, как дела. Спасибо, Веда 🙏💞»',
              },
              {
                name: 'Лилия Ткаче...',
                date: '28 мая 2024',
                initials: 'ЛТ',
                text: '«Веда Михайловна потрясающий мастер своего дела, подобрала мне уход и определенные процедуры, эффект увидела через две недели. Мастер своего дела, прекрасный собеседник, не пытается что-то навязать, а предлагает варианты, что можно попробовать именно Вам. Благодарна Веде Михайловне за её внимание и тщательный подход к лечению. Процветания Вам и побольше благодарных клиентов!»',
              },
            ].map((review) => (
              <div
                key={review.name}
                className="bg-[#FCFAF7] rounded-2xl p-6 border border-stone-200/60 flex flex-col hover:shadow-sm transition-shadow"
              >
                <div className="flex items-center gap-3 pb-4 border-b border-stone-200/60">
                  <div className="w-10 h-10 rounded-full bg-white border border-stone-200 flex items-center justify-center shrink-0">
                    <span className="text-xs font-bold text-emerald-900">{review.initials}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-stone-900 truncate">{review.name}</p>
                    <p className="text-xs text-stone-400 font-light">{review.date}</p>
                  </div>
                  <span className="inline-flex items-center bg-white border border-stone-200 text-stone-500 px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wide uppercase whitespace-nowrap shrink-0">
                    2ГИС
                  </span>
                </div>
                <div className="flex items-center gap-0.5 mt-4 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400" fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <p className="text-sm text-stone-600 font-light leading-relaxed flex-1">{review.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prices Section */}
      <section id="prices" className="py-20 bg-[#F6F3EE]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 mb-4">Прайс-лист</h2>
            <div className="w-16 h-1 bg-emerald-800 rounded-full mx-auto mb-4"></div>
            <p className="text-stone-500 font-light">Стоимость услуг определяется индивидуально в зависимости от сложности работы</p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {[
              { id: 'consultation', label: 'Консультация' },
              { id: 'pedicure', label: 'Педикюр' },
              { id: 'ingrown', label: 'Вросший ноготь' },
              { id: 'corn', label: 'Мозоли и трещины' },
              { id: 'additional', label: 'Доп. услуги' },
              { id: 'manicure', label: 'Маникюр' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActivePriceCategory(tab.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all ${activePriceCategory === tab.id
                    ? 'bg-emerald-900 text-[#FCFAF7] shadow-sm'
                    : 'bg-white text-stone-600 border border-stone-200 hover:border-stone-300'
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="bg-white rounded-2xl border border-stone-200/80 overflow-hidden">
            {activePriceCategory === 'consultation' && (
              <div className="divide-y divide-stone-100">
                <PriceRow name="Консультация при проведении процедуры" price="Бесплатно" />
                <PriceRow name="Консультация специалиста с осмотром" price="900 ₽" />
              </div>
            )}
            {activePriceCategory === 'pedicure' && (
              <div className="divide-y divide-stone-100">
                <PriceRow name="Педикюр аппаратный 1 категория (умеренное огрубение, без грибковых заболеваний)" price="2 200 ₽" />
                <PriceRow name="Педикюр аппаратный 2 категория (среднее огрубение / изменения ногтей)" price="2 700 ₽" />
                <PriceRow name="Педикюр аппаратный 3 категория (выраженное огрубение / утолщённая ногтевая пластина)" price="3 300 ₽" />
                <PriceRow name="Аппаратная обработка подошвенной части стопы" price="1 700 ₽" />
                <PriceRow name="Аппаратная обработка ногтевых пластин ног" price="1 700 ₽" />
                <PriceRow name="Обработка видоизменённой ногтевой пластины с проработкой боковых пазух (1 ед.)" price="1 500 ₽" />
                <PriceRow name="Обработка видоизменённой ногтевой пластины с проработкой боковых пазух (2/5 ед.)" price="2 400 ₽" />
                <PriceRow name="Обработка видоизменённой ногтевой пластины с проработкой боковых пазух (6/10 ед.)" price="4 000 ₽" />
                <PriceRow name="Подпиливание свободного края ногтей" price="1 000 ₽" />
              </div>
            )}
            {activePriceCategory === 'ingrown' && (
              <div>
                <div className="divide-y divide-stone-100">
                  <PriceRow name="Профилактическая коррекция, обработка болезненного угла без осложнения" price="1 300 ₽" />
                  <PriceRow name="Профилактическая коррекция с осложнением (деформация/травма пластины)" price="1 700 ₽" />
                  <PriceRow name='Установка коррекционной системы "Титановая нить" (1 ед.)' price="3 000 ₽" />
                  <PriceRow name='Установка коррекционной системы "LIGHT SYSTEM" (1 ед.)' price="3 000 ₽" />
                  <PriceRow name='Установка коррекционной системы "Podostripe" (1 ед.)' price="5 000 ₽" />
                  <PriceRow name="Переустановка со снятием к/с «Титановая нить»" price="1 300 ₽" />
                  <PriceRow name="Переустановка на новый размер к/с «Титановая нить» (ранее установленной специалистом PodoVed)" price="2 300 ₽" />
                </div>
                <div className="bg-emerald-50/60 p-4 m-4 rounded-xl border border-emerald-100">
                  <p className="text-emerald-800 text-sm font-semibold">💡 При установке любой коррекционной системы от 2 шт. — скидка 20%</p>
                </div>
              </div>
            )}
            {activePriceCategory === 'corn' && (
              <div className="divide-y divide-stone-100">
                <PriceRow name="Обработка стержневой/межпальцевой мозоли (1 мозоль) с разгрузкой диаметром не более 3 см" price="1 000 ₽" />
                <PriceRow name="Обработка стержневой мозоли (1 мозоль) с разгрузкой диаметром не более 3 см" price="1 400 ₽" />
                <PriceRow name="Обработка ороговевшей кожи подошвенной части стопы" price="от 1 700 ₽" />
              </div>
            )}
            {activePriceCategory === 'additional' && (
              <div>
                <div className="divide-y divide-stone-100">
                  <PriceRow name="Тампонирование боковых пазух ногтя (1 пазуха)" price="350 ₽" />
                  <PriceRow name="Наложение разгрузочной повязки на область мозоли" price="от 300 ₽" />
                  <PriceRow name="Тейпирование (зона пальца стопы)" price="400 ₽" />
                  <PriceRow name="Парафинотерапия (1 процедура)" price="900 ₽" />
                  <PriceRow name="Снятие коррекционной системы (чужая работа)" price="200 ₽" />
                  <PriceRow name="Моделирование индивидуального силиконового разделителя для пальцев ног (силикон 1 гр.)" price="300 ₽" />
                  <PriceRow name="Выезд на дом. Аппаратная обработка ног (частичная/полная)" price="от 3 000 ₽" />
                  <PriceRow name="Ламинирование ресниц" price="1 200 ₽" />
                </div>
                <div className="bg-amber-50/60 p-4 m-4 rounded-xl border border-amber-100">
                  <p className="text-amber-800 text-sm font-medium">🚗 Выезд на дом осуществляется к людям с ограниченными возможностями по передвижению + стоимость такси</p>
                </div>
              </div>
            )}
            {activePriceCategory === 'manicure' && (
              <div className="divide-y divide-stone-100">
                <PriceRow name="Маникюр (аппаратный / обрезной)" price="800 ₽" />
                <PriceRow name="Маникюр детский" price="700 ₽" />
                <PriceRow name="Маникюр + покрытие гель-лаком (однотонное)" price="1 500 ₽" />
                <PriceRow name="Маникюр + дип-система" price="1 800 ₽" />
                <PriceRow name="Маникюр + дизайн (френч/градиент)" price="1 900 ₽" />
                <PriceRow name="Наращивание ногтей" price="2 000 ₽" />
                <PriceRow name="Маникюр мужской" price="1 000 ₽" />
                <PriceRow name="Снятие лака при педикюре/маникюре" price="Бесплатно" />
                <PriceRow name="Снятие гель-лака (чужая работа)" price="400 ₽" />
                <PriceRow name="Выезд на дом. Маникюр" price="от 1 500 ₽" />
              </div>
            )}
          </div>

          <div className="mt-8 text-sm text-stone-400 font-light space-y-1.5 px-1">
            <p>* Стоимость услуг указана в рублях.</p>
            <p>* Окончательная стоимость определяется специалистом в зависимости от сложности и объёма работы, с применением повышающего коэффициента +10%, 20%, 30%.</p>
            <p>* Указание стоимости не является публичной офертой.</p>
          </div>
        </div>
      </section>

      {/* Discounts Section */}
      <section id="discounts" className="py-20 bg-[#FCFAF7]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 mb-4">Постоянные скидки</h2>
            <div className="w-16 h-1 bg-emerald-800 rounded-full mx-auto"></div>
          </div>
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              { percent: '30%', title: 'День рождения', desc: 'При предоставлении документа' },
              { percent: '30%', title: 'Пожилым людям', desc: 'Старше 70 лет' },
              { percent: '20%', title: 'Участникам СВО', desc: 'И ветеранам войн (при предоставлении удостоверения)' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-8 text-center border border-stone-200/60">
                <div className="text-4xl font-serif font-bold text-emerald-900 mb-2">{item.percent}</div>
                <h3 className="font-semibold text-stone-900 mb-1 text-sm">{item.title}</h3>
                <p className="text-xs text-stone-500 font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-stone-400 font-light mt-8">Скидки действительны от стоимости услуг более 1000 рублей</p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-[#F6F3EE]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 mb-4">Запишитесь на приём</h2>
            <div className="w-16 h-1 bg-emerald-800 rounded-full mx-auto mb-4"></div>
            <p className="text-stone-500 font-light max-w-md mx-auto">
              Свяжитесь со мной удобным способом, чтобы задать вопрос или записаться на консультацию.
            </p>
          </div>

          <div className="space-y-2.5">
            <a
              href="tel:+79129245676"
              className="group flex items-center justify-between bg-white rounded-xl px-5 py-4 border border-stone-200/80 hover:border-emerald-300 transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#FCFAF7] flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-emerald-800" />
                </div>
                <div>
                  <p className="text-xs text-stone-400 font-light">Телефон</p>
                  <p className="text-sm font-semibold text-stone-900">+7 (912) 924-56-76</p>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-stone-300 group-hover:text-emerald-800 transition-colors" />
            </a>

            <a
              href="https://max.ru/+79129245676"
              className="group flex items-center justify-between bg-white rounded-xl px-5 py-4 border border-stone-200/80 hover:border-emerald-300 transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#FCFAF7] flex items-center justify-center shrink-0">
                  <MessageSquare className="w-4 h-4 text-emerald-800" />
                </div>
                <div>
                  <p className="text-xs text-stone-400 font-light">Max</p>
                  <p className="text-sm font-semibold text-stone-900">+7 (912) 924-56-76</p>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-stone-300 group-hover:text-emerald-800 transition-colors" />
            </a>

            <a
              href="https://t.me/+79129245676"
              className="group flex items-center justify-between bg-white rounded-xl px-5 py-4 border border-stone-200/80 hover:border-emerald-300 transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#FCFAF7] flex items-center justify-center shrink-0">
                  <Send className="w-4 h-4 text-emerald-800" />
                </div>
                <div>
                  <p className="text-xs text-stone-400 font-light">Telegram</p>
                  <p className="text-sm font-semibold text-stone-900">+7 (912) 924-56-76</p>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-stone-300 group-hover:text-emerald-800 transition-colors" />
            </a>

            <a
              href="https://vk.ru/id816029033"
              className="group flex items-center justify-between bg-white rounded-xl px-5 py-4 border border-stone-200/80 hover:border-emerald-300 transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#FCFAF7] flex items-center justify-center shrink-0">
                  <Users className="w-4 h-4 text-emerald-800" />
                </div>
                <div>
                  <p className="text-xs text-stone-400 font-light">ВКонтакте</p>
                  <p className="text-sm font-semibold text-stone-900">vk.ru/id816029033</p>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-stone-300 group-hover:text-emerald-800 transition-colors" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-emerald-950 text-emerald-100/60 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-8 h-8 bg-emerald-900 rounded-full flex items-center justify-center border border-emerald-800">
                  <span className="text-[#FCFAF7] font-serif font-bold text-xs">VB</span>
                </div>
                <span className="font-serif font-bold text-white text-lg">PodoVed</span>
              </div>
              <p className="text-sm font-light leading-relaxed">Подолог Веда Бирман — здоровье и эстетика ваших стоп. Медицинский подход без компромиссов.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4 text-sm tracking-wide">Навигация</h4>
              <div className="space-y-2.5 text-sm font-light">
                {[
                  { label: 'О специалисте', id: 'about' },
                  { label: 'Услуги', id: 'services' },
                  { label: 'Прайс-лист', id: 'prices' },
                  { label: 'Скидки', id: 'discounts' },
                ].map((item) => (
                  <button key={item.id} onClick={() => scrollToSection(item.id)} className="block hover:text-white transition-colors">
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4 text-sm tracking-wide">Контакты</h4>
              <div className="space-y-2.5 text-sm font-light">
                <p>Телефон: <a href="tel:+79129245676" className="hover:text-white transition-colors">+7 (912) 924-56-76</a></p>
                <p>Max: <a href="https://max.ru/+79129245676" className="hover:text-white transition-colors">+7 (912) 924-56-76</a></p>
                <p>Telegram: <a href="https://t.me/+79129245676" className="hover:text-white transition-colors">+7 (912) 924-56-76</a></p>
                <p>ВКонтакте: <a href="https://vk.ru/id816029033" className="hover:text-white transition-colors">vk.ru/id816029033</a></p>
              </div>
            </div>
          </div>
          <div className="border-t border-emerald-900/60 mt-8 pt-6 text-center text-xs font-light tracking-wide">
            <p>© {new Date().getFullYear()} PodoVed — Веда Бирман. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function PriceRow({ name, price }: { name: string; price: string }) {
  return (
    <div className="flex justify-between items-start gap-6 px-6 py-4 hover:bg-[#FCFAF7] transition-colors">
      <span className="text-stone-600 text-sm font-light leading-relaxed">{name}</span>
      <span className="text-emerald-900 font-bold whitespace-nowrap text-sm">{price}</span>
    </div>
  );
}

export default App;