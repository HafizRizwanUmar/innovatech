import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Code, Smartphone, Settings, Globe, Database, Cloud } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import webIcon from '../assets/icon_web_development.png'
import appIcon from '../assets/icon_app_development.png'
import softwareIcon from '../assets/icon_software_development.png'

const Services = () => {
  const mainServices = [
    {
      icon: webIcon,
      title: 'Web Development',
      description: 'Create stunning, responsive websites and powerful web applications that engage users and drive business growth.',
      technologies: ['React', 'Angular', 'Vue.js', 'Node.js', 'Python/Django', 'PHP/Laravel'],
      features: [
        'Responsive Design & Mobile-First Approach',
        'E-commerce Solutions & Payment Integration',
        'Content Management Systems (WordPress, Drupal)',
        'Progressive Web Applications (PWA)',
        'Search Engine Optimization (SEO)',
        'Performance Optimization & Speed Enhancement',
        'Custom Web Applications',
        'API Development & Integration'
      ],
      pricing: 'Starting from £2,500'
    },
    {
      icon: appIcon,
      title: 'Mobile App Development',
      description: 'Build native and cross-platform mobile applications that deliver exceptional user experiences on iOS and Android.',
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Xamarin'],
      features: [
        'iOS & Android Native Development',
        'Cross-platform Solutions',
        'UI/UX Design & Prototyping',
        'App Store Optimization (ASO)',
        'Push Notifications & Real-time Features',
        'Offline Functionality',
        'Enterprise Mobility Solutions',
        'App Maintenance & Updates'
      ],
      pricing: 'Starting from £5,000'
    },
    {
      icon: softwareIcon,
      title: 'Custom Software Development',
      description: 'Develop tailored software solutions that address your unique business challenges and streamline operations.',
      technologies: ['Python', 'Java', 'C#', '.NET', 'AWS', 'Azure', 'Google Cloud'],
      features: [
        'Custom Business Applications',
        'SaaS Platform Development',
        'CRM & ERP Systems',
        'Cloud-based Solutions',
        'Desktop Applications',
        'System Integration & Migration',
        'Database Design & Optimization',
        'Third-party API Integration'
      ],
      pricing: 'Starting from £8,000'
    }
  ]

  const additionalServices = [
    {
      icon: Globe,
      title: 'Digital Strategy & Consulting',
      description: 'Strategic guidance to help you navigate the digital landscape and make informed technology decisions.'
    },
    {
      icon: Database,
      title: 'Database Solutions',
      description: 'Design, implement, and optimize database systems for maximum performance and scalability.'
    },
    {
      icon: Cloud,
      title: 'Cloud Services',
      description: 'Migrate to the cloud and leverage cloud-native technologies for improved efficiency and cost savings.'
    },
    {
      icon: Settings,
      title: 'Maintenance & Support',
      description: '24/7 technical support and ongoing maintenance to keep your applications running smoothly.'
    }
  ]

  const process = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'We analyze your requirements, define project scope, and create a detailed roadmap for success.'
    },
    {
      step: '02',
      title: 'Design & Prototyping',
      description: 'Our designers create intuitive user interfaces and interactive prototypes for your approval.'
    },
    {
      step: '03',
      title: 'Development & Testing',
      description: 'Our developers build your solution using best practices, with rigorous testing at every stage.'
    },
    {
      step: '04',
      title: 'Deployment & Launch',
      description: 'We deploy your solution and ensure a smooth launch with comprehensive documentation and training.'
    },
    {
      step: '05',
      title: 'Support & Maintenance',
      description: 'Ongoing support, updates, and enhancements to keep your solution performing at its best.'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Services
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Comprehensive digital solutions designed to accelerate your business growth 
            and deliver exceptional user experiences across all platforms.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {mainServices.map((service, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <Card className="h-full">
                    <CardContent className="p-8">
                      <div className="mb-6">
                        <img src={service.icon} alt={service.title} className="h-16 w-16" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-6">
                        {service.description}
                      </p>
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3">Technologies We Use:</h4>
                        <div className="flex flex-wrap gap-2">
                          {service.technologies.map((tech, techIndex) => (
                            <span key={techIndex} className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="text-lg font-semibold text-primary mb-4">
                        {service.pricing}
                      </div>
                      <Button asChild>
                        <Link to="/contact">
                          Get Quote
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">Key Features & Capabilities:</h4>
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Additional Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive support services to ensure your digital solutions continue to deliver value
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => (
              <Card key={index} className="text-center group hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <service.icon className="h-12 w-12 text-accent mx-auto" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Development Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery from concept to launch
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="mb-4">
                  <div className="w-16 h-16 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Let's discuss your requirements and create a custom solution that drives your business forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link to="/about">Learn About Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services

