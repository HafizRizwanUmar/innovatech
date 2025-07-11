import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Users, Target, Award, Clock, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Innovation First',
      description: 'We stay at the forefront of technology, constantly exploring new tools and methodologies to deliver cutting-edge solutions.'
    },
    {
      icon: Users,
      title: 'Client-Centric Approach',
      description: 'Your success is our success. We work closely with you to understand your needs and deliver solutions that exceed expectations.'
    },
    {
      icon: Award,
      title: 'Quality Excellence',
      description: 'We maintain the highest standards in code quality, design, and user experience through rigorous testing and best practices.'
    },
    {
      icon: Clock,
      title: 'Timely Delivery',
      description: 'We respect your time and deadlines, ensuring projects are delivered on schedule without compromising quality.'
    }
  ]

  const team = [
    {
      name: 'James Mitchell',
      role: 'Founder & Lead Developer',
      bio: 'With over 8 years of experience in full-stack development, James leads our technical vision and ensures every project meets our high standards.',
      expertise: ['React', 'Node.js', 'Cloud Architecture', 'Team Leadership']
    },
    {
      name: 'Sarah Thompson',
      role: 'Senior UI/UX Designer',
      bio: 'Sarah brings creativity and user-centered design thinking to every project, with 6 years of experience in digital design.',
      expertise: ['UI/UX Design', 'Prototyping', 'User Research', 'Design Systems']
    },
    {
      name: 'David Chen',
      role: 'Mobile Development Specialist',
      bio: 'David specializes in creating exceptional mobile experiences with expertise in both native and cross-platform development.',
      expertise: ['React Native', 'Flutter', 'iOS', 'Android']
    },
    {
      name: 'Emily Rodriguez',
      role: 'Project Manager',
      bio: 'Emily ensures smooth project execution and client communication, bringing 5 years of project management experience.',
      expertise: ['Agile Methodology', 'Client Relations', 'Quality Assurance', 'Process Optimization']
    }
  ]

  const milestones = [
    {
      year: '2019',
      title: 'Company Founded',
      description: 'Innovatech Solutions was established with a vision to bridge the gap between innovative technology and practical business solutions.'
    },
    {
      year: '2020',
      title: 'First Major Client',
      description: 'Successfully delivered our first enterprise-level project, establishing our reputation for quality and reliability.'
    },
    {
      year: '2021',
      title: 'Team Expansion',
      description: 'Grew our team to include specialized roles in design, mobile development, and project management.'
    },
    {
      year: '2022',
      title: 'Cloud Expertise',
      description: 'Became certified partners with major cloud providers, expanding our capabilities in cloud-native solutions.'
    },
    {
      year: '2023',
      title: '100+ Projects',
      description: 'Reached the milestone of 100 completed projects, serving clients across various industries.'
    },
    {
      year: '2024',
      title: 'Innovation Lab',
      description: 'Launched our innovation lab to explore emerging technologies like AI, blockchain, and IoT solutions.'
    }
  ]

  const stats = [
    { number: '150+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '98%', label: 'Client Retention Rate' },
    { number: '5+', label: 'Years in Business' }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Innovatech Solutions
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              We are a UK-based software house dedicated to pioneering digital futures through 
              innovative technology solutions that transform businesses and enhance user experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                To empower businesses with cutting-edge digital solutions that drive growth, 
                improve efficiency, and create meaningful connections with their customers. 
                We believe technology should be accessible, reliable, and transformative.
              </p>
              <p className="text-gray-600">
                Every project we undertake is an opportunity to make a positive impact, 
                whether it's helping a startup launch their first product or assisting 
                an enterprise in digital transformation.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
              <p className="text-lg text-gray-600 mb-6">
                To be the leading software house in the UK, recognized for our innovation, 
                quality, and commitment to client success. We envision a future where 
                technology seamlessly integrates with business processes to create 
                unprecedented value.
              </p>
              <p className="text-gray-600">
                We strive to stay ahead of technological trends, continuously learning 
                and adapting to provide our clients with solutions that not only meet 
                today's needs but anticipate tomorrow's challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and shape our company culture
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center group hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <value.icon className="h-12 w-12 text-accent mx-auto" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Talented professionals passionate about creating exceptional digital experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="bg-white">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="h-10 w-10 text-accent" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 text-center">
                      {member.name}
                    </h3>
                    <p className="text-accent text-center font-medium">
                      {member.role}
                    </p>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">
                    {member.bio}
                  </p>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Expertise:</h4>
                    <div className="flex flex-wrap gap-1">
                      {member.expertise.map((skill, skillIndex) => (
                        <span key={skillIndex} className="px-2 py-1 bg-accent/10 text-accent text-xs rounded">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key milestones that have shaped our growth and success
            </p>
          </div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-8">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-lg font-bold">
                    {milestone.year}
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-gray-600">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Join our growing list of satisfied clients and let us help you achieve your digital goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link to="/services">View Our Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About

