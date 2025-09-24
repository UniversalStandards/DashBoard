import React, { useState, useRef, useEffect } from 'react';

const USPIMPProjectNexus = () => {
  const [activeView, setActiveView] = useState('nexus');
  const [selectedProject, setSelectedProject] = useState('proj-001');
  const [draggedItem, setDraggedItem] = useState(null);
  const [aiInsights, setAiInsights] = useState([]);
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update time every second for real-time features
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Advanced project data structure
  const projectData = {
    'proj-001': {
      name: 'E-Commerce Platform Redesign',
      type: 'Product Development',
      health: 87,
      riskScore: 23,
      velocity: 12.4,
      predictedCompletion: '2024-12-15',
      aiConfidence: 94,
      team: {
        size: 8,
        satisfaction: 4.2,
        efficiency: 91
      },
      phases: [
        {
          id: 'discovery',
          name: 'Discovery & Research',
          status: 'completed',
          progress: 100,
          aiInsights: ['User research revealed 40% higher engagement with mobile-first approach'],
          items: [
            {
              id: 'item-001',
              title: 'User Research Analysis',
              status: 'completed',
              type: 'research',
              priority: 'high',
              assignee: 'Sarah Chen',
              aiScore: 95,
              effort: 8,
              impact: 'high',
              fileType: 'pdf',
              fileName: 'user-research-insights.pdf',
              tags: ['user-experience', 'data-analysis', 'insights'],
              smartMetrics: {
                complexity: 7,
                innovation: 8,
                stakeholderValue: 9
              }
            }
          ]
        },
        {
          id: 'design',
          name: 'Design & Prototyping',
          status: 'in-progress',
          progress: 65,
          aiInsights: ['Design system adoption will reduce future development time by 35%'],
          items: [
            {
              id: 'item-002',
              title: 'Interactive Prototype Development',
              status: 'in-progress',
              type: 'design',
              priority: 'critical',
              assignee: 'Marcus Rodriguez',
              aiScore: 88,
              effort: 9,
              impact: 'critical',
              fileType: 'figma',
              fileName: 'interactive-prototype-v3.fig',
              tags: ['prototype', 'user-interface', 'interaction-design'],
              smartMetrics: {
                complexity: 9,
                innovation: 9,
                stakeholderValue: 8
              }
            },
            {
              id: 'item-003',
              title: 'Design System Documentation',
              status: 'review',
              type: 'documentation',
              priority: 'high',
              assignee: 'Jennifer Kim',
              aiScore: 92,
              effort: 6,
              impact: 'high',
              fileType: 'notion',
              fileName: 'design-system-guide.notion',
              tags: ['design-system', 'documentation', 'standards'],
              smartMetrics: {
                complexity: 5,
                innovation: 6,
                stakeholderValue: 9
              }
            }
          ]
        }
      ]
    }
  };

  // Advanced file type system with smart categorization
  const smartFileTypes = {
    'pdf': { icon: '📊', color: '#FF6B6B', category: 'document', aiCapable: true },
    'figma': { icon: '🎨', color: '#A855F7', category: 'design', aiCapable: true },
    'notion': { icon: '📝', color: '#10B981', category: 'knowledge', aiCapable: true },
    'code': { icon: '⚡', color: '#3B82F6', category: 'development', aiCapable: true },
    'video': { icon: '🎬', color: '#F59E0B', category: 'media', aiCapable: true },
    'data': { icon: '📈', color: '#8B5CF6', category: 'analytics', aiCapable: true }
  };

  // Next-gen workflow stages
  const workflowStages = {
    ideation: [
      { id: 'concept', title: '💡 Concept', color: '#FEF3C7', aiFeatures: ['Idea scoring', 'Market analysis'] },
      { id: 'validation', title: '🔍 Validation', color: '#DBEAFE', aiFeatures: ['Risk assessment', 'Feasibility check'] },
      { id: 'planning', title: '📋 Planning', color: '#E0E7FF', aiFeatures: ['Resource optimization', 'Timeline prediction'] }
    ],
    execution: [
      { id: 'in-progress', title: '🚀 In Progress', color: '#FED7AA', aiFeatures: ['Progress prediction', 'Bottleneck detection'] },
      { id: 'review', title: '👁️ Review', color: '#FECACA', aiFeatures: ['Quality scoring', 'Stakeholder sentiment'] },
      { id: 'testing', title: '🧪 Testing', color: '#C7D2FE', aiFeatures: ['Bug prediction', 'Performance analysis'] }
    ],
    delivery: [
      { id: 'approved', title: '✅ Approved', color: '#D1FAE5', aiFeatures: ['Success metrics', 'Impact analysis'] },
      { id: 'deployed', title: '🌟 Deployed', color: '#ECFDF5', aiFeatures: ['Performance monitoring', 'User adoption tracking'] }
    ]
  };

  // AI-powered insights generator
  const generateAIInsights = () => {
    const insights = [
      {
        type: 'prediction',
        icon: '🔮',
        title: 'Project Completion Forecast',
        content: 'AI predicts 94% chance of on-time delivery based on current velocity patterns',
        confidence: 94,
        impact: 'high'
      },
      {
        type: 'optimization',
        icon: '⚡',
        title: 'Workflow Optimization',
        content: 'Moving design reviews to parallel track could accelerate timeline by 18%',
        confidence: 87,
        impact: 'medium'
      },
      {
        type: 'risk',
        icon: '⚠️',
        title: 'Risk Detection',
        content: 'Dependency on external API shows 23% risk - consider backup solution',
        confidence: 76,
        impact: 'medium'
      },
      {
        type: 'team',
        icon: '👥',
        title: 'Team Performance',
        content: 'Sarah Chen consistently delivers 15% ahead of estimates - consider more complex tasks',
        confidence: 91,
        impact: 'high'
      }
    ];
    setAiInsights(insights);
  };

  // Generate AI insights on mount
  useEffect(() => {
    generateAIInsights();
  }, []);

  // Smart item card component
  const SmartItemCard = ({ item, stage }) => {
    const fileType = smartFileTypes[item.fileType] || smartFileTypes.pdf;
    const [isExpanded, setIsExpanded] = useState(false);

    return (
      <div
        draggable
        onDragStart={(e) => setDraggedItem(item)}
        className="bg-white rounded-xl shadow-lg p-4 mb-4 cursor-move hover:shadow-2xl transition-all duration-300 border-l-4 transform hover:-translate-y-1"
        style={{ borderLeftColor: fileType.color }}
      >
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <div className="flex items-center mb-2">
              <span className="text-2xl mr-2">{fileType.icon}</span>
              <div className="flex-1">
                <h4 className="font-bold text-gray-800 text-sm leading-tight">
                  {item.title}
                </h4>
                <div className="flex items-center space-x-2 mt-1">
                  <span className="text-xs text-gray-500">by {item.assignee}</span>
                  <div className="flex items-center space-x-1">
                    <span className="text-xs">🤖</span>
                    <span className="text-xs font-medium text-purple-600">{item.aiScore}% AI</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col items-end space-y-1">
            <div
              className={`px-2 py-1 rounded-full text-xs font-bold text-white ${
                item.priority === 'critical' ? 'bg-red-500' :
                item.priority === 'high' ? 'bg-orange-500' :
                item.priority === 'medium' ? 'bg-yellow-500' : 'bg-green-500'
              }`}
            >
              {item.priority.toUpperCase()}
            </div>
          </div>
        </div>

        {/* Smart metrics */}
        <div className="grid grid-cols-3 gap-2 mb-3">
          <div className="text-center">
            <div className="text-xs text-gray-500">Complexity</div>
            <div className="font-bold text-blue-600">{item.smartMetrics.complexity}/10</div>
          </div>
          <div className="text-center">
            <div className="text-xs text-gray-500">Innovation</div>
            <div className="font-bold text-purple-600">{item.smartMetrics.innovation}/10</div>
          </div>
          <div className="text-center">
            <div className="text-xs text-gray-500">Impact</div>
            <div className="font-bold text-green-600">{item.smartMetrics.stakeholderValue}/10</div>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 mb-3">
          {item.tags.map(tag => (
            <span
              key={tag}
              className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* AI-powered actions */}
        <div className="grid grid-cols-2 gap-2">
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-medium py-2 px-3 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all">
            🤖 AI Review
          </button>
          <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-xs font-medium py-2 px-3 rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all">
            📂 Smart Open
          </button>
        </div>

        {/* Expandable AI insights */}
        {item.aiScore > 90 && (
          <div className="mt-3 p-2 bg-purple-50 rounded-lg">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-purple-700">🧠 AI Insights Available</span>
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-xs text-purple-600 hover:text-purple-800"
              >
                {isExpanded ? '▲' : '▼'}
              </button>
            </div>
            {isExpanded && (
              <div className="mt-2 text-xs text-purple-600">
                This item shows exceptional quality metrics and could be used as a template for similar tasks.
              </div>
            )}
          </div>
        )}
      </div>
    );
  };

  // AI Insights Panel
  const AIInsightsPanel = () => (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold text-lg text-gray-800">🧠 AI Command Center</h3>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-xs text-gray-500">Live Analysis</span>
        </div>
      </div>

      <div className="space-y-4">
        {aiInsights.map((insight, index) => (
          <div key={index} className="p-4 border border-gray-200 rounded-lg hover:border-purple-300 transition-colors">
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center space-x-2">
                <span className="text-lg">{insight.icon}</span>
                <h4 className="font-semibold text-sm text-gray-800">{insight.title}</h4>
              </div>
              <div className={`px-2 py-1 rounded-full text-xs font-bold ${
                insight.confidence > 90 ? 'bg-green-100 text-green-700' :
                insight.confidence > 70 ? 'bg-yellow-100 text-yellow-700' :
                'bg-red-100 text-red-700'
              }`}>
                {insight.confidence}% confident
              </div>
            </div>
            <p className="text-xs text-gray-600">{insight.content}</p>
          </div>
        ))}
      </div>

      <button className="w-full mt-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium py-3 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all">
        🚀 Generate New Insights
      </button>
    </div>
  );

  const currentProject = projectData[selectedProject];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Futuristic Header */}
      <div className="bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 text-white">
        <div className="max-w-full mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <span className="text-xl">🌟</span>
                </div>
                <div>
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
                    US-PIMP Project Nexus
                  </h1>
                  <p className="text-purple-300 text-sm">Universal Standard Project Innovation & Management Platform</p>
                </div>
              </div>
            </div>

            {/* Real-time stats */}
            <div className="flex items-center space-x-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">87%</div>
                <div className="text-xs text-purple-300">Project Health</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">12.4</div>
                <div className="text-xs text-purple-300">Velocity</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">94%</div>
                <div className="text-xs text-purple-300">AI Confidence</div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-6 flex space-x-4">
            {['nexus', 'intelligence', 'collaboration', 'analytics'].map(view => (
              <button
                key={view}
                onClick={() => setActiveView(view)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  activeView === view
                    ? 'bg-white text-purple-600 shadow-lg'
                    : 'bg-purple-800 text-white hover:bg-purple-700'
                }`}
              >
                {view.charAt(0).toUpperCase() + view.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex min-h-screen">
        {/* Left Sidebar - AI Insights */}
        <div className="w-80 p-6 border-r bg-white/50 backdrop-blur-sm">
          <AIInsightsPanel />
        </div>

        {/* Main Kanban Area */}
        <div className="flex-1 p-6">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">{currentProject.name}</h2>
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <span>🎯 {currentProject.type}</span>
              <span>👥 {currentProject.team.size} members</span>
              <span>📅 Due {currentProject.predictedCompletion}</span>
            </div>
          </div>

          {/* Three-tier workflow */}
          <div className="grid grid-cols-3 gap-6 h-full">
            {/* Ideation Stage */}
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white p-4 rounded-xl">
                <h3 className="font-bold text-lg">💡 Ideation Pipeline</h3>
                <p className="text-yellow-100 text-sm">Where ideas take shape</p>
              </div>
              <div className="grid gap-3">
                {workflowStages.ideation.map(stage => (
                  <div key={stage.id} className="bg-white rounded-lg p-4 shadow-md min-h-32">
                    <h4 className="font-semibold text-sm mb-2">{stage.title}</h4>
                    <div className="text-xs text-gray-500">
                      AI: {stage.aiFeatures.join(', ')}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Execution Stage */}
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-4 rounded-xl">
                <h3 className="font-bold text-lg">🚀 Execution Pipeline</h3>
                <p className="text-blue-100 text-sm">Where work gets done</p>
              </div>
              <div className="grid gap-3">
                {workflowStages.execution.map(stage => (
                  <div key={stage.id} className="bg-white rounded-lg p-4 shadow-md min-h-32">
                    <h4 className="font-semibold text-sm mb-2">{stage.title}</h4>
                    {stage.id === 'in-progress' && currentProject.phases[1].items.map(item => (
                      <SmartItemCard key={item.id} item={item} stage={stage} />
                    ))}
                    <div className="text-xs text-gray-500">
                      AI: {stage.aiFeatures.join(', ')}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Delivery Stage */}
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-green-500 to-teal-500 text-white p-4 rounded-xl">
                <h3 className="font-bold text-lg">🌟 Delivery Pipeline</h3>
                <p className="text-green-100 text-sm">Where impact is measured</p>
              </div>
              <div className="grid gap-3">
                {workflowStages.delivery.map(stage => (
                  <div key={stage.id} className="bg-white rounded-lg p-4 shadow-md min-h-32">
                    <h4 className="font-semibold text-sm mb-2">{stage.title}</h4>
                    <div className="text-xs text-gray-500">
                      AI: {stage.aiFeatures.join(', ')}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar - Team Intelligence */}
        <div className="w-80 p-6 border-l bg-white/50 backdrop-blur-sm">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="font-bold text-lg text-gray-800 mb-4">👥 Team Intelligence</h3>
            
            <div className="space-y-4">
              <div className="p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-gray-700">Team Satisfaction</span>
                  <span className="text-lg font-bold text-green-600">{currentProject.team.satisfaction}/5.0</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-green-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${(currentProject.team.satisfaction / 5) * 100}%` }}
                  ></div>
                </div>
              </div>

              <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-gray-700">Efficiency Score</span>
                  <span className="text-lg font-bold text-purple-600">{currentProject.team.efficiency}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-purple-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${currentProject.team.efficiency}%` }}
                  ></div>
                </div>
              </div>

              <div className="text-center py-4">
                <div className="text-2xl mb-2">🎯</div>
                <div className="text-sm text-gray-600">
                  Next milestone in <strong>8 days</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default USPIMPProjectNexus;
