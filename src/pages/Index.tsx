import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const MolecuLinkLanding = () => {
  const [language, setLanguage] = useState<'en' | 'ru'>('en');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const content = {
    en: {
      nav: {
        about: 'About',
        solution: 'Solution', 
        science: 'Science',
        contact: 'Contact'
      },
      hero: {
        title: 'Designing personalized drugs for high-mortality diseases with AI',
        subtitle: 'One diagnosis ≠ one disease. Personalized medicines have higher efficacy, fewer side effects, and eliminate unnecessary trial-and-error cycles. The MolecuLink platform orchestrates AI models and accelerates drug molecule discovery by 8-10x.',
        cta: 'Partner with us'
      },
      problem: {
        title: 'The Personalized Medicine Challenge',
        description: 'At today’s costs and development timelines, personalized medicines cannot be created and used on a mass scale. The discovery cycle takes more than 10 years, $160+ billion is spent on drug R&D annually, and 96% of drug candidates fail in trials.',
        stats: ['10+ year cycle', '$160+ billion/year', '96% failure rate']
      },
      solution: {
        title: 'AI Molecule Modeling',
        description: 'AI molecule modeling allows us to dramatically reduce the time and cost of searching for drug candidates. The technology reduces the drug candidate discovery cycle by 8-10x, significantly increases prediction accuracy, and enables the creation of personalized medicines.',
        benefits: ['8-10x acceleration', 'High accuracy', 'Personalization']
      },
      science: {
        title: 'Scientific Foundation',
        description: 'Our work builds on the groundbreaking progress recognized by the 2024 Nobel Prize in Chemistry, where AI achieved over 90% accuracy in predicting 3D protein structures. This revolution is transforming biology and chemistry, and we extend it directly into drug design. MolecuLink.ai makes it possible to personalize therapies and unlock treatments previously out of reach.',
        achievement: '90%+ accuracy in protein structure prediction'
      },
      howItWorks: {
        title: 'How It Works',
        description: 'The MolecuLink platform orchestrates AI models and accelerates drug molecule discovery. Researchers define a target in the organism — the goal of drug action. The platform automatically selects molecules with the required properties for this target.',
        steps: ['Target Definition', 'Molecule Selection', 'Candidate Formation'],
        pipeline: 'Researchers → MolecuLink → Drug Candidates'
      },
      benefits: {
        title: 'Benefits',
        description: 'With MolecuLink.ai, pharmaceutical R&D can cut years off development timelines and save millions in costs. Our technology raises the probability of clinical success and makes personalized medicine achievable.',
        items: [
          { title: 'Time Savings', desc: 'Cut years off development' },
          { title: 'Cost Reduction', desc: 'Save millions in R&D' },
          { title: 'Higher Success', desc: 'Increased clinical probability' },
          { title: 'Personalized Medicine', desc: 'Tailored treatments' }
        ]
      },
      whoWeHelp: {
        title: 'Who We Help',
        description: 'Our product is focused on pharma, biotech startups, as well as medical and scientific organizations.',
        segments: [
          { title: 'Pharmaceutical Companies', desc: 'Reduce R&D cycle by 8-10x' },
          { title: 'Biotech Startups', desc: 'Rapid launch of innovative drugs' },
          { title: 'Clinics & Research Centers', desc: 'Application for personalized medicine' }
        ]
      },
      vision: {
        title: 'Our Vision',
        description: 'Our mission is clear: to bring personalized medicine to reality by merging AI and biotechnology. MolecuLink.ai stands as the bridge between patients, scientists, and machine intelligence — reshaping how humanity discovers and creates life-saving therapies.'
      },
      cta: {
        title: 'Partner with us',
        description: 'Partner with us and be part of the future of medicine. Together, we can shorten discovery timelines, unlock breakthrough therapies, and bring personalized treatments to patients worldwide.',
        form: {
          name: 'Name',
          email: 'Email',
          company: 'Company',
          message: 'Message',
          submit: 'Send Message'
        }
      }
    },
    ru: {
      nav: {
        about: 'О нас',
        solution: 'Решение',
        science: 'Наука',
        contact: 'Контакты'
      },
      hero: {
        title: 'Дизайн персонализированных лекарств от болезней с высоким летальным исходом с помощью ИИ',
        subtitle: 'Один диагноз ≠ одна болезнь. Персонализированные лекарства имеют более высокую эффективность, меньше побочных эффектов и исключают лишние циклы «проб и ошибок». Платформа MolecuLink оркестрирует ИИ-модели и ускоряет поиск лекарственных молекул в 8-10 раз.',
        cta: 'Стать партнёром'
      },
      problem: {
        title: 'Проблема создания персонализированных лекарств',
        description: 'При сегодняшних стоимости и сроках разработки персонализированные лекарства не могут массово создаваться и использоваться. Цикл поиска занимает более 10 лет, 160+ млрд $ тратится на R&D лекарств в год, а 96% молекул-кандидатов проваливаются на испытаниях.',
        stats: ['10+ лет цикл', '160+ млрд $ в год', '96% провалов']
      },
      solution: {
        title: 'ИИ-моделирование молекул',
        description: 'ИИ-моделирование молекул позволяет кратно сократить время и стоимость поиска молекул-кандидатов. Технология сокращает цикл поиска молекул-кандидатов в 8-10 раз, значительно повышает точность предсказания и позволяет создавать персонализированные препараты.',
        benefits: ['В 8-10 раз ускорение', 'Высокая точность', 'Персонализация']
      },
      science: {
        title: 'Научный фундамент',
        description: 'Наша работа основана на научном прорыве, отмеченном Нобелевской премией по химии 2024 года, когда ИИ впервые достиг точности выше 90% в предсказании 3D-структур белков. Это открытие перевернуло биологию и химию, и мы переносим его в сферу дизайна лекарств.',
        achievement: '90%+ точность предсказания структур белков'
      },
      howItWorks: {
        title: 'Как это работает',
        description: 'Платформа MolecuLink оркестрирует ИИ-модели и ускоряет поиск лекарственных молекул. Исследователи задают мишень (таргет) в организме — цель действия лекарства. Платформа автоматизированно подбирает молекулы с нужными свойствами.',
        steps: ['Задание мишени', 'Подбор молекул', 'Формирование кандидатов'],
        pipeline: 'Исследователи → MolecuLink → Молекулы-кандидаты'
      },
      benefits: {
        title: 'Преимущества',
        description: 'С MolecuLink.ai фармацевтические компании сокращают сроки разработки на годы и экономят миллионы долларов. Технология повышает вероятность успешных клинических испытаний и делает персонализированную медицину реальностью.',
        items: [
          { title: 'Экономия времени', desc: 'Сокращение разработки на годы' },
          { title: 'Снижение затрат', desc: 'Экономия миллионов в R&D' },
          { title: 'Выше успешность', desc: 'Больше успешных испытаний' },
          { title: 'Персональная медицина', desc: 'Индивидуальные методы лечения' }
        ]
      },
      whoWeHelp: {
        title: 'Кому мы помогаем',
        description: 'Продукт ориентирован на фарму, биотех-стартапы, а также на медицинские и научные организации.',
        segments: [
          { title: 'Фармацевтические компании', desc: 'Сокращение цикла R&D в 8–10 раз' },
          { title: 'Биотех-стартапы', desc: 'Быстрый вывод инновационных препаратов' },
          { title: 'Клиники и научные центры', desc: 'Применение для персонализированной медицины' }
        ]
      },
      vision: {
        title: 'Наша миссия',
        description: 'Наша миссия проста: сделать персонализированную медицину реальностью, объединяя искусственный интеллект и биотехнологии. MolecuLink.ai становится мостом между пациентами, учёными и машинным интеллектом.'
      },
      cta: {
        title: 'Стать партнёром',
        description: 'Станьте нашим партнёром и примите участие в создании будущего медицины. Вместе мы сократим сроки разработки, откроем новые виды терапии и сделаем персонализированные лекарства доступными.',
        form: {
          name: 'Имя',
          email: 'Email',
          company: 'Компания',
          message: 'Сообщение',
          submit: 'Отправить'
        }
      }
    }
  };

  const t = content[language];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the form data to your backend
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src="https://cdn.poehali.dev/files/b8e7aa75-5c3a-4579-a2bb-fb148e85665c.png" 
              alt="MolecuLink.ai" 
              className="h-12 w-auto"
            />
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">{t.nav.about}</a>
            <a href="#solution" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">{t.nav.solution}</a>
            <a href="#science" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">{t.nav.science}</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">{t.nav.contact}</a>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => setLanguage(language === 'en' ? 'ru' : 'en')}
              className="px-3 py-1 rounded-md bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors font-medium"
            >
              {language === 'en' ? 'RU' : 'EN'}
            </button>
            <Button className="modern-gradient text-white">
              {t.hero.cta}
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="section-spacing px-6 relative bg-white">
        <div className="hero-pattern absolute inset-0"></div>
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 modern-gradient-text animate-fade-in leading-tight">
              {t.hero.title}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed animate-slide-up max-w-3xl mx-auto">
              {t.hero.subtitle}
            </p>
            <Button size="lg" className="modern-gradient hover:scale-105 transition-transform animate-scale-in text-white px-8 py-3">
              <Icon name="Zap" className="mr-2" />
              {t.hero.cta}
            </Button>
          </div>
          
          <div className="mt-16 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-float"></div>
            <Icon name="Atom" size={100} className="mx-auto text-blue-500 animate-float" />
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="about" className="section-spacing px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 modern-gradient-text">
              {t.problem.title}
            </h2>
            <p className="text-lg text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto">
              {t.problem.description}
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              {t.problem.stats.map((stat, index) => (
                <Card key={index} className="clean-card hover:shadow-lg transition-shadow">
                  <CardContent className="p-8 text-center">
                    <div className="text-3xl font-bold modern-gradient-text mb-4">{stat}</div>
                    <Icon name={index === 0 ? "Clock" : index === 1 ? "DollarSign" : "TrendingDown"} 
                          className="mx-auto text-gray-400" size={24} />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="section-spacing px-6 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 modern-gradient-text">
              {t.solution.title}
            </h2>
            <p className="text-lg text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto">
              {t.solution.description}
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              {t.solution.benefits.map((benefit, index) => (
                <Card key={index} className="clean-card hover:shadow-lg transition-shadow border-l-4 border-l-blue-500">
                  <CardContent className="p-8 text-center">
                    <Icon name={index === 0 ? "Timer" : index === 1 ? "Database" : "TrendingUp"} 
                          className="mx-auto text-blue-500 mb-4" size={40} />
                    <div className="text-xl font-semibold text-gray-900">{benefit}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Scientific Foundation */}
      <section id="science" className="section-spacing px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 modern-gradient-text">
              {t.science.title}
            </h2>
            <p className="text-lg text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto">
              {t.science.description}
            </p>
            
            <Card className="clean-card bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200 max-w-2xl mx-auto">
              <CardContent className="p-8">
                <Icon name="Award" className="mx-auto text-yellow-500 mb-4" size={48} />
                <div className="text-2xl font-bold text-gray-900 mb-2">
                  Nobel Prize 2024
                </div>
                <div className="text-lg text-gray-700">
                  {t.science.achievement}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="section-spacing px-6 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 modern-gradient-text">
              {t.howItWorks.title}
            </h2>
            <p className="text-lg text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto">
              {t.howItWorks.description}
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {t.howItWorks.steps.map((step, index) => (
                <Card key={index} className="clean-card hover:shadow-lg transition-shadow relative">
                  <CardContent className="p-8 text-center">
                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-sm font-bold text-white">
                      {index + 1}
                    </div>
                    <Icon name={index === 0 ? "Dna" : index === 1 ? "Zap" : "Pill"} 
                          className="mx-auto text-cyan-500 mb-4" size={40} />
                    <div className="text-lg font-semibold text-gray-900">{step}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-xl font-mono modern-gradient-text font-semibold">
              {t.howItWorks.pipeline}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-spacing px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 modern-gradient-text">
              {t.benefits.title}
            </h2>
            <p className="text-lg text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto">
              {t.benefits.description}
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {t.benefits.items.map((item, index) => (
                <Card key={index} className="clean-card hover:shadow-lg transition-all hover:-translate-y-1">
                  <CardContent className="p-6 text-center">
                    <Icon name={index === 0 ? "Clock" : index === 1 ? "DollarSign" : index === 2 ? "TrendingUp" : "User"} 
                          className="mx-auto text-blue-500 mb-4" size={36} />
                    <h3 className="text-lg font-semibold mb-2 text-gray-900">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who We Help */}
      <section className="section-spacing px-6 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 modern-gradient-text">
              {t.whoWeHelp.title}
            </h2>
            <p className="text-lg text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto">
              {t.whoWeHelp.description}
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {t.whoWeHelp.segments.map((segment, index) => (
                <Card key={index} className="clean-card hover:shadow-lg transition-all hover:-translate-y-1">
                  <CardContent className="p-6 text-center">
                    <Icon name={index === 0 ? "Building2" : index === 1 ? "Microscope" : index === 2 ? "Hospital" : "TrendingUp"} 
                          className="mx-auto text-gray-700 mb-4" size={36} />
                    <h3 className="text-lg font-semibold mb-2 text-gray-900">{segment.title}</h3>
                    <p className="text-gray-600 text-sm">{segment.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="section-spacing px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 modern-gradient-text">
              {t.vision.title}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
              {t.vision.description}
            </p>
            
            <div className="mt-12 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-3xl"></div>
              <div className="relative flex justify-center items-center space-x-8 py-12">
                <Icon name="Users" size={40} className="text-blue-500" />
                <Icon name="Plus" size={24} className="text-gray-400" />
                <Icon name="Brain" size={40} className="text-cyan-500" />
                <Icon name="Plus" size={24} className="text-gray-400" />
                <Icon name="Atom" size={40} className="text-purple-500" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="section-spacing px-6 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 modern-gradient-text">
              {t.cta.title}
            </h2>
            <p className="text-lg text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto">
              {t.cta.description}
            </p>
            
            <Card className="clean-card max-w-2xl mx-auto">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input
                      name="name"
                      placeholder={t.cta.form.name}
                      value={formData.name}
                      onChange={handleInputChange}
                      className="bg-white border-gray-300 focus:border-blue-500"
                      required
                    />
                    <Input
                      name="email"
                      type="email"
                      placeholder={t.cta.form.email}
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-white border-gray-300 focus:border-blue-500"
                      required
                    />
                  </div>
                  
                  <Input
                    name="company"
                    placeholder={t.cta.form.company}
                    value={formData.company}
                    onChange={handleInputChange}
                    className="bg-white border-gray-300 focus:border-blue-500"
                  />
                  
                  <Textarea
                    name="message"
                    placeholder={t.cta.form.message}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="bg-white border-gray-300 focus:border-blue-500 min-h-32"
                    required
                  />
                  
                  <Button type="submit" size="lg" className="w-full modern-gradient text-white">
                    <Icon name="Send" className="mr-2" />
                    {t.cta.form.submit}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-gray-900 border-t border-gray-800">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <img 
              src="https://cdn.poehali.dev/files/b8e7aa75-5c3a-4579-a2bb-fb148e85665c.png" 
              alt="MolecuLink.ai" 
              className="h-8 w-auto"
            />
          </div>
          <p className="text-gray-400 text-lg">
            © 2024 MolecuLink.ai. {language === 'en' ? 'Reshaping the future of medicine.' : 'Меняем будущее медицины.'}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default MolecuLinkLanding;