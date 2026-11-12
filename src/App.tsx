import { useState } from 'react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activePriceCategory, setActivePriceCategory] = useState('pedicure');

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">VB</span>
              </div>
              <span className="font-semibold text-gray-800 text-lg">PodoVed</span>
            </div>
            
            {/* Desktop menu */}
            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('about')} className="text-gray-600 hover:text-emerald-700 transition-colors text-sm font-medium">О специалисте</button>
              <button onClick={() => scrollToSection('services')} className="text-gray-600 hover:text-emerald-700 transition-colors text-sm font-medium">Услуги</button>
              <button onClick={() => scrollToSection('prices')} className="text-gray-600 hover:text-emerald-700 transition-colors text-sm font-medium">Прайс-лист</button>
              <button onClick={() => scrollToSection('discounts')} className="text-gray-600 hover:text-emerald-700 transition-colors text-sm font-medium">Скидки</button>
              <button onClick={() => scrollToSection('contact')} className="bg-emerald-600 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-emerald-700 transition-colors">Записаться</button>
            </div>

            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-4 space-y-3">
              <button onClick={() => scrollToSection('about')} className="block w-full text-left text-gray-600 hover:text-emerald-700 py-2">О специалисте</button>
              <button onClick={() => scrollToSection('services')} className="block w-full text-left text-gray-600 hover:text-emerald-700 py-2">Услуги</button>
              <button onClick={() => scrollToSection('prices')} className="block w-full text-left text-gray-600 hover:text-emerald-700 py-2">Прайс-лист</button>
              <button onClick={() => scrollToSection('discounts')} className="block w-full text-left text-gray-600 hover:text-emerald-700 py-2">Скидки</button>
              <button onClick={() => scrollToSection('contact')} className="block w-full bg-emerald-600 text-white px-5 py-2 rounded-full text-center font-medium">Записаться</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-16">
        <div className="relative bg-gradient-to-br from-emerald-50 via-white to-teal-50 min-h-[90vh] flex items-center">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-emerald-100 rounded-full opacity-50 blur-3xl"></div>
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-teal-100 rounded-full opacity-50 blur-3xl"></div>
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Медицинское образование
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                  Здоровье и красота <span className="text-emerald-600">ваших стоп</span>
                </h1>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-xl">
                  Меня зовут <strong className="text-gray-800">Веда Бирман</strong> — подолог с медицинским образованием и опытом более 18 лет. Помогаю решать проблемы со стопами бережно, безопасно и надолго.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="bg-emerald-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-emerald-700 transition-all hover:shadow-lg hover:shadow-emerald-200"
                  >
                    Записаться на приём
                  </button>
                  <button 
                    onClick={() => scrollToSection('prices')}
                    className="border-2 border-emerald-600 text-emerald-700 px-8 py-4 rounded-full font-semibold text-lg hover:bg-emerald-50 transition-colors"
                  >
                    Смотреть прайс
                  </button>
                </div>
                <div className="flex items-center gap-8 mt-10 pt-8 border-t border-gray-200">
                  <div>
                    <div className="text-3xl font-bold text-emerald-600">18+</div>
                    <div className="text-sm text-gray-500">лет опыта</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-emerald-600">2016</div>
                    <div className="text-sm text-gray-500">год специализации</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-emerald-600">DE</div>
                    <div className="text-sm text-gray-500">стажировки в Германии</div>
                  </div>
                </div>
              </div>
              <div className="hidden lg:block">
                <div className="relative">
                  <div className="w-full aspect-square bg-gradient-to-br from-emerald-100 to-teal-100 rounded-3xl flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="w-32 h-32 mx-auto bg-white rounded-full flex items-center justify-center shadow-lg mb-6">
                        <svg className="w-16 h-16 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </div>
                      <p className="text-emerald-800 font-medium text-lg">Забота о здоровье</p>
                      <p className="text-emerald-600 text-sm mt-1">ваших стоп</p>
                    </div>
                  </div>
                  <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-lg p-4 flex items-center gap-3">
                    <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-800">Доказательная практика</p>
                      <p className="text-xs text-gray-500">Актуальные методики</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">О специалисте</h2>
            <div className="w-20 h-1 bg-emerald-500 mx-auto rounded-full"></div>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Забота о здоровье и красоте стоп — это не просто уход, а точная работа, где важны знания, опыт и внимание к деталям. Я помогаю решать проблемы со стопами <strong>бережно, безопасно и надолго</strong>.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Более 18 лет я в сфере эстетического ухода за стопами и руками, а с 2016 года специализируюсь именно на подологии. За это время я выстроила подход, в котором <strong>медицинская точность сочетается с комфортом</strong> для пациента.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Постоянно повышаю квалификацию, в том числе у специалистов из Германии, участвую в профильных конференциях и мастер-классах. Это значит, что в работе я использую актуальные методики и опираюсь на доказательную практику.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-emerald-50 rounded-2xl p-6 text-center">
                <div className="w-14 h-14 mx-auto bg-emerald-100 rounded-xl flex items-center justify-center mb-3">
                  <svg className="w-7 h-7 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-800 mb-1">Образование</h3>
                <p className="text-sm text-gray-600">Медицинское</p>
              </div>
              <div className="bg-teal-50 rounded-2xl p-6 text-center">
                <div className="w-14 h-14 mx-auto bg-teal-100 rounded-xl flex items-center justify-center mb-3">
                  <svg className="w-7 h-7 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-800 mb-1">Безопасность</h3>
                <p className="text-sm text-gray-600">Стерильность</p>
              </div>
              <div className="bg-cyan-50 rounded-2xl p-6 text-center">
                <div className="w-14 h-14 mx-auto bg-cyan-100 rounded-xl flex items-center justify-center mb-3">
                  <svg className="w-7 h-7 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-800 mb-1">Стажировки</h3>
                <p className="text-sm text-gray-600">Германия</p>
              </div>
              <div className="bg-green-50 rounded-2xl p-6 text-center">
                <div className="w-14 h-14 mx-auto bg-green-100 rounded-xl flex items-center justify-center mb-3">
                  <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-800 mb-1">Результат</h3>
                <p className="text-sm text-gray-600">Надолго</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Направления работы</h2>
            <div className="w-20 h-1 bg-emerald-500 mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">Комплексный подход к здоровью ваших стоп — от профилактики до решения сложных проблем</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Service Card 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-7 h-7 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Аппаратный педикюр</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Профессиональная обработка стоп для проблемных ног с учётом категории сложности</p>
            </div>
            {/* Service Card 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-7 h-7 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Вросший ноготь</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Коррекционные системы: Титановая нить, LIGHT SYSTEM, Podostripe. Безболезненное решение проблемы</p>
            </div>
            {/* Service Card 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-7 h-7 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Стержневые мозоли</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Удаление стержневых и межпальцевых мозолей с разгрузкой проблемной зоны</p>
            </div>
            {/* Service Card 4 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Трещины на стопах</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Обработка ороговевшей кожи подошвенной части стопы, устранение дискомфорта</p>
            </div>
            {/* Service Card 5 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-7 h-7 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Маникюр</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Аппаратный и обрезной маникюр, покрытие гель-лаком, дип-система, наращивание</p>
            </div>
            {/* Service Card 6 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="w-14 h-14 bg-pink-100 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-7 h-7 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Выезд на дом</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Для людей с ограниченными возможностями по передвижению. Полный комплект оборудования</p>
            </div>
          </div>
        </div>
      </section>

      {/* Price Section */}
      <section id="prices" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Прайс-лист</h2>
            <div className="w-20 h-1 bg-emerald-500 mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-4">Стоимость услуг определяется индивидуально в зависимости от сложности работы</p>
          </div>

          {/* Price tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {[
              { id: 'consultation', label: 'Консультация' },
              { id: 'pedicure', label: 'Педикюр' },
              { id: 'ingrown', label: 'Вросший ноготь' },
              { id: 'corn', label: 'Мозоли и трещины' },
              { id: 'additional', label: 'Доп. услуги' },
              { id: 'manicure', label: 'Маникюр' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActivePriceCategory(tab.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activePriceCategory === tab.id
                    ? 'bg-emerald-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Price tables */}
          <div className="max-w-4xl mx-auto">
            {activePriceCategory === 'consultation' && (
              <div className="bg-gray-50 rounded-2xl overflow-hidden">
                <div className="divide-y divide-gray-200">
                  <PriceRow name="Консультация при проведении процедуры" price="Бесплатно" />
                  <PriceRow name="Консультация специалиста с осмотром" price="900 ₽" />
                </div>
              </div>
            )}

            {activePriceCategory === 'pedicure' && (
              <div className="bg-gray-50 rounded-2xl overflow-hidden">
                <div className="divide-y divide-gray-200">
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
              </div>
            )}

            {activePriceCategory === 'ingrown' && (
              <div className="bg-gray-50 rounded-2xl overflow-hidden">
                <div className="divide-y divide-gray-200">
                  <PriceRow name="Профилактическая коррекция, обработка болезненного угла без осложнения" price="1 300 ₽" />
                  <PriceRow name="Профилактическая коррекция с осложнением (деформация/травма пластины)" price="1 700 ₽" />
                  <PriceRow name='Установка коррекционной системы "Титановая нить" (1 ед.)' price="3 000 ₽" />
                  <PriceRow name='Установка коррекционной системы "LIGHT SYSTEM" (1 ед.)' price="3 000 ₽" />
                  <PriceRow name='Установка коррекционной системы "Podostripe" (1 ед.)' price="5 000 ₽" />
                  <PriceRow name="Переустановка со снятием к/с «Титановая нить»" price="1 300 ₽" />
                  <PriceRow name="Переустановка на новый размер к/с «Титановая нить» (ранее установленной специалистом PodoVed)" price="2 300 ₽" />
                </div>
                <div className="bg-emerald-50 p-4 mt-4 rounded-xl mx-4 mb-4">
                  <p className="text-emerald-800 text-sm font-medium">💡 При установке любой коррекционной системы от 2 шт. — скидка 20%</p>
                </div>
              </div>
            )}

            {activePriceCategory === 'corn' && (
              <div className="bg-gray-50 rounded-2xl overflow-hidden">
                <div className="divide-y divide-gray-200">
                  <PriceRow name="Обработка стержневой/межпальцевой мозоли (1 мозоль) с разгрузкой диаметром не более 3 см" price="1 000 ₽" />
                  <PriceRow name="Обработка стержневой мозоли (1 мозоль) с разгрузкой диаметром не более 3 см" price="1 400 ₽" />
                  <PriceRow name="Обработка ороговевшей кожи подошвенной части стопы" price="от 1 700 ₽" />
                </div>
              </div>
            )}

            {activePriceCategory === 'additional' && (
              <div className="bg-gray-50 rounded-2xl overflow-hidden">
                <div className="divide-y divide-gray-200">
                  <PriceRow name="Тампонирование боковых пазух ногтя (1 пазуха)" price="350 ₽" />
                  <PriceRow name="Наложение разгрузочной повязки на область мозоли" price="от 300 ₽" />
                  <PriceRow name="Тейпирование (зона пальца стопы)" price="400 ₽" />
                  <PriceRow name="Парафинотерапия (1 процедура)" price="900 ₽" />
                  <PriceRow name="Снятие коррекционной системы (чужая работа)" price="200 ₽" />
                  <PriceRow name="Моделирование индивидуального силиконового разделителя для пальцев ног (силикон 1 гр.)" price="300 ₽" />
                  <PriceRow name="Выезд на дом. Аппаратная обработка ног (частичная/полная)" price="от 3 000 ₽" />
                  <PriceRow name="Ламинирование ресниц" price="1 200 ₽" />
                </div>
                <div className="bg-amber-50 p-4 mt-4 rounded-xl mx-4 mb-4">
                  <p className="text-amber-800 text-sm">🚗 Выезд на дом осуществляется к людям с ограниченными возможностями по передвижению + стоимость такси</p>
                </div>
              </div>
            )}

            {activePriceCategory === 'manicure' && (
              <div className="bg-gray-50 rounded-2xl overflow-hidden">
                <div className="divide-y divide-gray-200">
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
              </div>
            )}

            <div className="mt-8 bg-gray-50 rounded-xl p-6 text-sm text-gray-600 space-y-2">
              <p>* Стоимость услуг указана в рублях.</p>
              <p>* Окончательная стоимость определяется специалистом в зависимости от сложности и объёма работы, с применением повышающего коэффициента +10%, 20%, 30%.</p>
              <p>* Указание стоимости не является публичной офертой.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Discounts Section */}
      <section id="discounts" className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Постоянные скидки</h2>
            <div className="w-20 h-1 bg-emerald-500 mx-auto rounded-full"></div>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 text-center shadow-sm">
              <div className="text-4xl font-bold text-emerald-600 mb-2">30%</div>
              <h3 className="font-semibold text-gray-800 mb-2">День рождения</h3>
              <p className="text-sm text-gray-600">При предоставлении документа</p>
            </div>
            <div className="bg-white rounded-2xl p-8 text-center shadow-sm">
              <div className="text-4xl font-bold text-emerald-600 mb-2">30%</div>
              <h3 className="font-semibold text-gray-800 mb-2">Пожилым людям</h3>
              <p className="text-sm text-gray-600">Старше 70 лет</p>
            </div>
            <div className="bg-white rounded-2xl p-8 text-center shadow-sm">
              <div className="text-4xl font-bold text-emerald-600 mb-2">20%</div>
              <h3 className="font-semibold text-gray-800 mb-2">Участникам СВО</h3>
              <p className="text-sm text-gray-600">И ветеранам войн (при предоставлении удостоверения)</p>
            </div>
          </div>
          <p className="text-center text-sm text-gray-500 mt-8">Скидки действительны от стоимости услуг более 1000 рублей</p>
        </div>
      </section>

      {/* CTA / Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-emerald-600 to-teal-700 rounded-3xl p-8 sm:p-12 lg:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/3 translate-y-1/3"></div>
            </div>
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Запишитесь на приём</h2>
              <p className="text-emerald-100 text-lg max-w-2xl mx-auto mb-8">
                Если вы устали от дискомфорта, мозолей, трещин или других проблем со стопами — запишитесь на консультацию. Вместе найдём решение, которое подойдёт именно вам.
              </p>
              <p className="text-emerald-100 mb-8">
                Сделайте первый шаг к здоровым и комфортным стопам!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+79001234567" 
                  className="inline-flex items-center justify-center gap-2 bg-white text-emerald-700 px-8 py-4 rounded-full font-semibold text-lg hover:bg-emerald-50 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  Позвонить
                </a>
                <a 
                  href="https://wa.me/79001234567" 
                  className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">VB</span>
                </div>
                <span className="font-semibold text-white text-lg">PodoVed</span>
              </div>
              <p className="text-sm">Подолог Веда Бирман — здоровье и красота ваших стоп</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Навигация</h4>
              <div className="space-y-2 text-sm">
                <button onClick={() => scrollToSection('about')} className="block hover:text-emerald-400 transition-colors">О специалисте</button>
                <button onClick={() => scrollToSection('services')} className="block hover:text-emerald-400 transition-colors">Услуги</button>
                <button onClick={() => scrollToSection('prices')} className="block hover:text-emerald-400 transition-colors">Прайс-лист</button>
                <button onClick={() => scrollToSection('discounts')} className="block hover:text-emerald-400 transition-colors">Скидки</button>
              </div>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-sm">
                <p>Телефон: <a href="tel:+79001234567" className="hover:text-emerald-400 transition-colors">+7 (900) 123-45-67</a></p>
                <p>WhatsApp: <a href="https://wa.me/79001234567" className="hover:text-emerald-400 transition-colors">+7 (900) 123-45-67</a></p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
            <p>© {new Date().getFullYear()} PodoVed — Веда Бирман. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function PriceRow({ name, price }: { name: string; price: string }) {
  return (
    <div className="flex justify-between items-start gap-4 p-5 hover:bg-white transition-colors">
      <span className="text-gray-700 text-sm sm:text-base">{name}</span>
      <span className="text-emerald-700 font-semibold whitespace-nowrap text-sm sm:text-base">{price}</span>
    </div>
  );
}

export default App;
