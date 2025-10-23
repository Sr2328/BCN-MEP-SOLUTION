'use client';
import { useState, useEffect, useRef } from 'react';
import { MessageCircle, Phone, Mail, X, Send, Zap, MapPin, Clock, Star, ChevronDown } from 'lucide-react';

export function FloatingCTA() {
  const [isOpen, setIsOpen] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [messages, setMessages] = useState([
    { 
      type: 'bot', 
      text: 'Hello! I\'m BCN Assist 👋\n\nWelcome to BCN MEP Solutions Pvt. Ltd. We specialize in end-to-end MEP services for industrial, commercial, and institutional buildings.\n\nHow can I help you today?',
      options: ['Fire Fighting', 'Electrical Works', 'HVAC Systems', 'Plumbing', 'Get Quote']
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [leadData, setLeadData] = useState<{ name?: string; contact?: string; service?: string; projectType?: string; location?: string; timeline?: string }>({});
  const [collectingLead, setCollectingLead] = useState(false);
  const [leadStep, setLeadStep] = useState(0);
  const [showRating, setShowRating] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  // BCN MEP Solutions Knowledge Base
  const bcnKnowledge = {
    company_info: {
      keywords: ['about', 'company', 'bcn', 'who are you', 'tell me about', 'experience', 'certifications'],
      response: 'BCN MEP Solutions Pvt. Ltd. is a leading MEP contracting company specializing in Mechanical, Electrical, and Plumbing services. We provide end-to-end solutions in:\n\n🔥 Fire Fighting Systems\n⚡ Electrical Installations\n❄️ HVAC Systems\n💧 Plumbing & Utility Piping\n📡 ELV & BMS Systems\n\nWe serve Delhi NCR, Gurgaon, and surrounding areas with certified expertise and proven project excellence. What specific service can I help you with?',
      options: ['View Services', 'Get Quote', 'Contact Details']
    },
    fire_fighting: {
      keywords: ['fire', 'fighting', 'sprinkler', 'hydrant', 'fire alarm', 'fire safety', 'nfpa', 'fire system'],
      response: '🔥 Fire Fighting Systems\n\nWe design, install, and maintain comprehensive fire protection systems including:\n\n• Hydrant Systems\n• Sprinkler Systems (wet & dry)\n• Fire Alarm & Detection Systems\n• Fire Extinguisher Installation\n• Emergency Evacuation Systems\n\n✅ NFPA & IS Standards Compliant\n✅ AMC Available\n✅ Suitable for: Hotels, Hospitals, Industrial, Commercial\n\nWould you like a detailed proposal for your project?',
      options: ['Get Quote', 'AMC Details', 'View Projects', 'Talk to Expert']
    },
    electrical: {
      keywords: ['electrical', 'power', 'wiring', 'lighting', 'panel', 'ht', 'lt', 'cable', 'earthing', 'distribution'],
      response: '⚡ Electrical Works & Installations\n\nOur electrical services include:\n\n• HT/LT Panel Installation\n• Power Distribution Systems\n• Industrial & Commercial Wiring\n• Lighting Design & Installation\n• Earthing & Lightning Protection\n• Cable Laying & Management\n• Electrical Audits\n• 24/7 Emergency Support\n\n✅ Certified Electricians\n✅ Fast Response Time\n✅ Quality Materials\n\nWhat type of electrical project do you have?',
      options: ['Industrial Project', 'Commercial Building', 'Hospital/Healthcare', 'Get Quote']
    },
    hvac: {
      keywords: ['hvac', 'air conditioning', 'ac', 'ventilation', 'cooling', 'heating', 'ahu', 'chiller', 'vrf', 'duct'],
      response: '❄️ HVAC Systems & Solutions\n\nComplete HVAC solutions for optimal comfort:\n\n• Central Air Conditioning\n• VRF/VRV Systems\n• Chiller Plants\n• AHU & FCU Installation\n• Ventilation & Exhaust Systems\n• Ductwork Design & Installation\n• Energy-Efficient Solutions\n• Preventive Maintenance\n\n✅ Customized Designs\n✅ Energy Savings\n✅ Regular Maintenance Support\n\nWhat\'s your project requirement?',
      options: ['Commercial HVAC', 'Industrial Cooling', 'Hospital HVAC', 'AMC Services']
    },
    plumbing: {
      keywords: ['plumbing', 'water', 'pipe', 'drainage', 'sewage', 'sanitary', 'utility', 'stp', 'wtp'],
      response: '💧 Plumbing & Utility Piping\n\nComprehensive plumbing solutions:\n\n• Water Supply Systems\n• Drainage & Sewage Systems\n• Sanitary Fixture Installation\n• Utility Piping (Hot/Cold Water)\n• STP & WTP Installation\n• Rainwater Harvesting\n• Fire Hydrant Piping\n• Pump Room Setup\n\n✅ Quality Pipes & Fittings\n✅ Leak-Proof Installations\n✅ Long-term Warranty\n\nWhat plumbing service do you need?',
      options: ['New Installation', 'Maintenance', 'Emergency Repair', 'Get Quote']
    },
    elv_bms: {
      keywords: ['elv', 'bms', 'automation', 'control', 'cctv', 'security', 'access control', 'building management'],
      response: '📡 ELV & Building Management Systems\n\nSmart building solutions:\n\n• Building Management Systems (BMS)\n• CCTV & Surveillance\n• Access Control Systems\n• Fire Alarm Integration\n• Public Address Systems\n• Structured Cabling\n• EPABX Systems\n• Home Automation\n\n✅ Integrated Solutions\n✅ Remote Monitoring\n✅ Energy Management\n\nInterested in smart building automation?',
      options: ['BMS Details', 'Security Systems', 'Get Quote', 'Schedule Demo']
    },
    amc: {
      keywords: ['amc', 'maintenance', 'annual contract', 'service contract', 'repair', 'upkeep'],
      response: '🔧 Annual Maintenance Contracts (AMC)\n\nWe provide comprehensive AMC for:\n\n• Fire Fighting Systems\n• HVAC & Air Conditioning\n• Electrical Systems\n• Plumbing & Sanitary\n• ELV & BMS Systems\n\n📋 AMC Benefits:\n✅ Regular Inspections\n✅ Priority Response\n✅ Cost-Effective\n✅ Extended Equipment Life\n✅ 24/7 Support Helpline\n\nWhich system needs maintenance?',
      options: ['Fire System AMC', 'HVAC AMC', 'Electrical AMC', 'Custom AMC']
    },
    location: {
      keywords: ['location', 'area', 'where', 'service area', 'delhi', 'ncr', 'gurgaon', 'noida'],
      response: '📍 Service Areas\n\nBCN MEP Solutions serves:\n\n• Delhi NCR\n• Gurgaon / Gurugram\n• Noida / Greater Noida\n• Faridabad\n• Ghaziabad\n• And surrounding areas\n\n🚀 We also undertake pan-India projects for large-scale industrial and commercial developments.\n\nWhere is your project located?',
      options: ['Within NCR', 'Outside NCR', 'Get Quote']
    },
    projects: {
      keywords: ['project', 'portfolio', 'work', 'completed', 'reference', 'experience'],
      response: '🏗️ Our Project Experience\n\nBCN MEP Solutions has successfully completed projects in:\n\n✅ Healthcare: Hospitals, Clinics\n✅ Hospitality: Hotels, Resorts\n✅ Industrial: Factories, Warehouses\n✅ Commercial: Offices, Malls, Showrooms\n✅ Institutional: Schools, Colleges\n✅ Residential: High-rise Apartments\n\nWould you like to discuss a similar project?',
      options: ['Hospital Project', 'Industrial Project', 'Commercial Project', 'Get Quote']
    },
    quote: {
      keywords: ['quote', 'quotation', 'price', 'cost', 'estimate', 'budget', 'proposal'],
      response: '📋 Get a Free Quote\n\nI\'d be happy to help you with a detailed quotation! To prepare an accurate estimate, I\'ll need some information about your project.\n\nShall we proceed?',
      startLead: true
    },
    emergency: {
      keywords: ['emergency', 'urgent', 'immediate', 'asap', 'breakdown', 'help now'],
      response: '🚨 Emergency Support\n\nFor urgent assistance, please call us immediately:\n\n📞 +91 98765 43210\n📞 Emergency Hotline: +91 98765 43211\n\nOur team is available 24/7 for emergency MEP services.\n\nOr you can share your emergency details here, and we\'ll connect you right away!',
      options: ['Call Now', 'Share Emergency Details']
    }
  };

  const leadQuestions = [
    { 
      field: 'name', 
      question: 'Great! Let\'s start with your name please:', 
      type: 'text' 
    },
    { 
      field: 'contact', 
      question: 'Thank you! Could you share your contact number?', 
      type: 'text',
      validate: (val: string) => /^[6-9]\d{9}$/.test(val) ? true : 'Please enter a valid 10-digit mobile number'
    },
    { 
      field: 'service', 
      question: 'Which service are you interested in?', 
      type: 'options',
      options: ['Fire Fighting', 'Electrical', 'HVAC', 'Plumbing', 'ELV/BMS', 'Multiple Services']
    },
    { 
      field: 'projectType', 
      question: 'What type of project is this?', 
      type: 'options',
      options: ['Industrial', 'Commercial', 'Hospital/Healthcare', 'Hotel/Hospitality', 'Residential', 'Institutional']
    },
    { 
      field: 'location', 
      question: 'Where is your project located?', 
      type: 'text' 
    },
    { 
      field: 'timeline', 
      question: 'What\'s your preferred timeline?', 
      type: 'options',
      options: ['Urgent (Within 1 week)', 'Within 1 month', '1-3 months', 'Planning Phase']
    }
  ];

  const getBotResponse = (userInput: string) => {
    const input = userInput.toLowerCase();
    
    // Greetings
    if (input.match(/\b(hi|hello|hey|good morning|good afternoon|good evening|namaste)\b/)) {
      return {
        text: 'Hello! 👋 Welcome to BCN MEP Solutions!\n\nI\'m BCN Assist, your virtual MEP consultant. How can I help you today?',
        options: ['Our Services', 'Get Quote', 'Emergency Support', 'Contact Us']
      };
    }

    // Thank you
    if (input.match(/\b(thank you|thanks|appreciate)\b/)) {
      return {
        text: 'You\'re welcome! 😊\n\nIs there anything else you\'d like to know about our MEP services?\n\nFeel free to ask or connect with our team directly!',
        options: ['Talk to Expert', 'Get Quote', 'Rate Experience']
      };
    }

    // Check knowledge base
    for (const [category, data] of Object.entries(bcnKnowledge) as [string, any][]) {
      if (data && Array.isArray(data.keywords) && data.keywords.some((keyword: string) => input.includes(keyword))) {
        if ('startLead' in data && data.startLead) {
          setCollectingLead(true);
          setLeadStep(0);
        }
        return {
          text: data.response,
          options: 'options' in data && Array.isArray(data.options) ? data.options : []
        };
      }
    }

    // Default response
    return {
      text: '🤔 I\'m here to help with BCN MEP Solutions services!\n\nI can assist you with:\n• Fire Fighting Systems\n• Electrical Installations\n• HVAC & Air Conditioning\n• Plumbing & Utility Piping\n• ELV & BMS Systems\n• AMC & Maintenance\n• Project Quotations\n\nWhat would you like to know more about?',
      options: ['View All Services', 'Get Quote', 'Talk to Expert']
    };
  };

  const handleSendMessage = (messageText = input) => {
    if (!messageText.trim()) return;

    const userMessage = { type: 'user', text: messageText, options: [] };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      if (collectingLead && leadStep < leadQuestions.length) {
        const currentQuestion = leadQuestions[leadStep];
        
        // Validate if needed
        if (currentQuestion.validate) {
          const validation = currentQuestion.validate(messageText);
          if (validation !== true) {
            setMessages(prev => [...prev, { type: 'bot', text: validation + '\n\nPlease try again:', options: [] }]);
            setIsTyping(false);
            return;
          }
        }

        // Store lead data
        setLeadData(prev => ({ ...prev, [currentQuestion.field]: messageText }));
        
        // Move to next question
        const nextStep = leadStep + 1;
        setLeadStep(nextStep);

        if (nextStep < leadQuestions.length) {
          const nextQuestion = leadQuestions[nextStep];
          setMessages(prev => [...prev, { 
            type: 'bot', 
            text: nextQuestion.question,
            options: nextQuestion.options || []
          }]);
        } else {
          // Lead collection complete
          setCollectingLead(false);
          setMessages(prev => [...prev, { 
            type: 'bot', 
            text: `Perfect! Thank you for the details. 🎉\n\nOur MEP expert will contact you shortly at ${leadData.contact}.\n\nProject Summary:\n📋 Service: ${leadData.service}\n🏢 Type: ${leadData.projectType}\n📍 Location: ${leadData.location}\n📅 Timeline: ${messageText}\n\nWould you like to:\n• Add any specific requirements?\n• Schedule a site visit?\n• Speak with our team now?`,
            options: ['Call Now', 'WhatsApp', 'Add Requirements', 'Rate Experience']
          }]);
        }
        setIsTyping(false);
      } else {
        // Normal conversation
        const botResponse = getBotResponse(messageText);
        setMessages(prev => [...prev, { type: 'bot', ...botResponse }]);
        setIsTyping(false);
      }
    }, 1200);
  };

  const handleOptionClick = (option: string | undefined) => {
    handleSendMessage(option);
  };

  const handleWhatsAppClick = () => {
    const message = leadData.name 
      ? `Hello! I'm ${leadData.name}. I need information about ${leadData.service || 'MEP services'} for my project.`
      : 'Hello! I would like to inquire about BCN MEP services.';
    window.open(`https://wa.me/919876543210?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:+919876543210';
  };

  const handleEmailClick = () => {
    const subject = leadData.service ? `Inquiry: ${leadData.service} - ${leadData.projectType}` : 'MEP Services Inquiry';
    window.location.href = `mailto:info@bcnmep.com?subject=${encodeURIComponent(subject)}`;
  };

  const handleRating = (stars: number) => {
    setMessages(prev => [...prev, 
      { type: 'user', text: `⭐ ${stars} stars`, options: [] },
      { type: 'bot', text: `Thank you for your ${stars}-star rating! ${stars >= 4 ? '😊' : ''}\n\nYour feedback helps us serve you better. Our team at BCN MEP Solutions looks forward to working with you!\n\nNeed anything else?`, options: ['New Inquiry', 'Contact Team'] }
    ]);
    setShowRating(false);
  };

  return (
    <>
      {/* Chat Window */}
      {showChat && (
  <div
    className="fixed bottom-0 right-0 left-0 md:bottom-6 md:right-6 md:left-auto z-50 
    w-full md:w-[420px] h-[80vh] md:h-[600px] 
    bg-white rounded-t-2xl md:rounded-2xl shadow-2xl 
    flex flex-col overflow-hidden border border-gray-100
    transition-all duration-300"
  >
    {/* Chat Header */}
    <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 text-white p-4 flex justify-between items-center">
      <div className="flex items-center gap-3">
        <div className="relative">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center font-bold text-blue-600 text-base md:text-lg">
            BCN
          </div>
          <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></div>
        </div>
        <div>
          <h3 className="font-bold text-base md:text-lg">BCN Assist</h3>
          <p className="text-[11px] md:text-xs text-blue-100 flex items-center gap-1">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            Online • MEP Solutions Expert
          </p>
        </div>
      </div>
      <button
        onClick={() => setShowChat(false)}
        className="hover:bg-blue-600 p-2 rounded-full transition-colors"
      >
        <X className="w-5 h-5" />
      </button>
    </div>

    {/* Quick Info Bar */}
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 px-3 md:px-4 py-2 border-b flex items-center justify-between text-[10px] md:text-xs flex-wrap">
      <div className="flex items-center gap-1 text-gray-700">
        <Clock className="w-3 h-3" />
        <span>24/7 Support</span>
      </div>
      <div className="flex items-center gap-1 text-gray-700">
        <MapPin className="w-3 h-3" />
        <span>Delhi NCR</span>
      </div>
      <div className="flex items-center gap-1 text-gray-700">
        <Zap className="w-3 h-3" />
        <span>Instant Response</span>
      </div>
    </div>

    {/* Messages Area */}
    <div className="flex-1 overflow-y-auto p-3 md:p-4 space-y-4 bg-gradient-to-b from-gray-50 to-white">
      {messages.map((msg, idx) => (
        <div key={idx}>
          <div className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div
              className={`max-w-[85%] md:max-w-[80%] p-3 md:p-4 text-sm md:text-base leading-relaxed ${
                msg.type === 'user'
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl rounded-br-md shadow-lg'
                  : 'bg-white text-gray-800 rounded-2xl rounded-bl-md shadow-md border border-gray-100'
              }`}
            >
              {msg.text}
            </div>
          </div>

          {/* Quick Reply Buttons */}
          {msg.options && msg.options.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-3 ml-0">
              {msg.options.map((option, i) => (
                <button
                  key={i}
                  onClick={() => handleOptionClick(option)}
                  className="bg-white hover:bg-blue-50 text-blue-600 border-2 border-blue-200 px-3 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium transition-all hover:border-blue-400 hover:shadow-md"
                >
                  {option}
                </button>
              ))}
            </div>
          )}
        </div>
      ))}

      {/* Typing Indicator */}
      {isTyping && (
        <div className="flex justify-start">
          <div className="bg-white p-3 rounded-2xl rounded-bl-md shadow-md border border-gray-100">
            <div className="flex space-x-2 items-center">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
              <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
              <span className="text-[11px] text-gray-500 ml-2">BCN Assist is typing...</span>
            </div>
          </div>
        </div>
      )}

      {/* Rating Section */}
      {showRating && (
        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-4 rounded-xl border-2 border-yellow-200">
          <p className="text-sm font-semibold text-gray-800 mb-3 text-center">Rate your experience:</p>
          <div className="flex gap-2 justify-center">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                onClick={() => handleRating(star)}
                className="hover:scale-125 transition-transform"
              >
                <Star className="w-6 h-6 md:w-8 md:h-8 fill-yellow-400 text-yellow-500 hover:fill-yellow-500" />
              </button>
            ))}
          </div>
        </div>
      )}

      <div ref={messagesEndRef} />
    </div>

    {/* Chat Input */}
    <div className="p-3 md:p-4 border-t bg-white">
      <div className="flex gap-2 items-end">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          placeholder="Type your message..."
          className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-full focus:outline-none focus:border-blue-500 text-sm md:text-base"
        />
        <button
          onClick={() => handleSendMessage()}
          className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white p-3 rounded-full transition-all hover:scale-105 shadow-lg"
        >
          <Send className="w-5 h-5" />
        </button>
      </div>
      <p className="text-[11px] text-gray-500 mt-2 text-center">
        Powered by <span className="font-semibold text-blue-600">BCN MEP Solutions</span> • Your MEP Partner
      </p>
    </div>
  </div>
)}


      {/* Contact Options Menu */}
      {isOpen && !showChat && (
        <div className="fixed bottom-20 md:bottom-24 right-4 md:right-6 z-40 bg-white rounded-2xl shadow-2xl p-2 space-y-2 w-[calc(100vw-2rem)] md:w-72 border border-gray-100">
          <div className="px-3 py-2 border-b">
            <p className="font-bold text-gray-800 text-sm">Connect with BCN MEP</p>
            <p className="text-xs text-gray-500">Choose your preferred channel</p>
          </div>

          <button
            onClick={() => { setShowChat(true); setIsOpen(false); }}
            className="w-full flex items-center gap-3 p-3 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 rounded-xl transition-all group"
          >
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-3 rounded-xl group-hover:scale-110 transition-transform shadow-md">
              <MessageCircle className="w-5 h-5 text-white" />
            </div>
            <div className="text-left flex-1">
              <p className="font-semibold text-gray-800 text-sm">Live Chat with BCN Assist</p>
              <p className="text-xs text-gray-600">Instant MEP solutions • AI-powered</p>
            </div>
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          </button>

          <button
            onClick={handleWhatsAppClick}
            className="w-full flex items-center gap-3 p-3 hover:bg-green-50 rounded-xl transition-all group"
          >
            <div className="bg-green-500 p-3 rounded-xl group-hover:scale-110 transition-transform shadow-md">
              <MessageCircle className="w-5 h-5 text-white" />
            </div>
            <div className="text-left flex-1">
              <p className="font-semibold text-gray-800 text-sm">WhatsApp</p>
              <p className="text-xs text-gray-600">+91 98765 43210 • Quick response</p>
            </div>
          </button>

          <button
            onClick={handlePhoneClick}
            className="w-full flex items-center gap-3 p-3 hover:bg-orange-50 rounded-xl transition-all group"
          >
            <div className="bg-orange-500 p-3 rounded-xl group-hover:scale-110 transition-transform shadow-md">
              <Phone className="w-5 h-5 text-white" />
            </div>
            <div className="text-left flex-1">
              <p className="font-semibold text-gray-800 text-sm">Call Us Now</p>
              <p className="text-xs text-gray-600">+91 98765 43210 • 24/7 Available</p>
            </div>
          </button>

          <button
            onClick={handleEmailClick}
            className="w-full flex items-center gap-3 p-3 hover:bg-purple-50 rounded-xl transition-all group"
          >
            <div className="bg-purple-500 p-3 rounded-xl group-hover:scale-110 transition-transform shadow-md">
              <Mail className="w-5 h-5 text-white" />
            </div>
            <div className="text-left flex-1">
              <p className="font-semibold text-gray-800 text-sm">Email</p>
              <p className="text-xs text-gray-600">info@bcnmep.com</p>
            </div>
          </button>

          <div className="px-3 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl mt-2">
            <p className="text-xs text-gray-700 text-center">
              🏆 <strong>Trusted MEP Partner</strong> • Delhi NCR
            </p>
          </div>
        </div>
      )}

      {/* Main Floating Button */}
    <button
  onClick={() => setIsOpen(!isOpen)}
  className={`fixed bottom-4 right-4 md:bottom-6 md:right-6 z-40 
    bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 
    hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 
    text-white p-4 md:p-5 rounded-full shadow-2xl 
    transition-all duration-300 transform 
    ${isOpen ? 'rotate-45 scale-105' : 'hover:scale-110'}
  `}
  aria-label="Contact BCN MEP Solutions"
>
  {isOpen ? (
    <X className="w-6 h-6 md:w-7 md:h-7" />
  ) : (
    <MessageCircle className="w-6 h-6 md:w-7 md:h-7" />
  )}
</button>

{/* Notification Badge */}
{!isOpen && !showChat && (
  <div className="fixed bottom-16 md:bottom-[4.5rem] right-3 md:right-5 z-40">
    <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white 
      text-xs font-bold rounded-full w-7 h-7 flex items-center 
      justify-center shadow-lg transition-all duration-300">
      NEW
    </div>
  </div>
)}

{/* Floating Label */}
{!isOpen && !showChat && (
  <div className="hidden md:block fixed bottom-6 right-24 z-40 
    bg-white px-4 py-2 rounded-full shadow-lg border-2 border-blue-200 
    transition-all duration-500 hover:scale-105">
    <p className="text-sm font-semibold text-gray-800">
      Need MEP Solutions? 💬
    </p>
  </div>
)}
    </>
  );
}