(function()
{
	/**
	 * Download from following URL as TSV and convert using https://jgraph.github.io/drawio-tools/tools/convert.html:
	 * https://docs.google.com/spreadsheets/d/1sAL1zn-UtmJtKPH4cLApGjRX-TRSJa5dYdfZ9NKYfRs
	 * Maps package and stencil names to additional tags.
	 */
	Sidebar.prototype.tagIndex = 'UzV1UjV1AQA=';

	/**
	 * To update this, go to https://test.draw.io/?dev=1&test=1&drawdev=1&demo=1&createindex=1 and
	 * copy the output of searchFileData from the browser console to the variable below.
	 */
	Sidebar.prototype.searchIndexData = 'UzV1UjV1AQA=';
	
	/**
	 * Overrides gear image URL.
	 */
	Sidebar.prototype.gearImage = GRAPH_IMAGE_PATH + '/clipart/Gear_128x128.png';
	
	/**
	 * Aliases for IDs in the libs parameter.
	 */
	Sidebar.prototype.libAliases = {'aws2': 'aws3', 'gcp' : 'gcp2'};
	
	/**
	 * 
	 */
	Sidebar.prototype.defaultEntries = 'general;uml;er;bpmn;flowchart;basic;arrows2';
	
	/**
	 * Library definitions 
	 */
	Sidebar.prototype.signs = ['Animals', 'Food', 'Healthcare', 'Nature', 'People', 'Safety', 'Science', 'Sports', 'Tech', 'Transportation', 'Travel'];

	Sidebar.prototype.ibm = ['Analytics', 'Applications', 'Blockchain', 'Data', 'DevOps', 'Infrastructure', 'Management', 'Miscellaneous', 'Security', 'Social', 'Users', 'VPC', 'Boxes', 'Connectors'];

	Sidebar.prototype.allied_telesis = ['Buildings', 'Computer and Terminals', 'Media Converters', 'Security', 'Storage', 'Switch', 'Wireless'];

	Sidebar.prototype.gcp = ['Cards', 'Big Data', 'Compute', 'Developer Tools', 'Extras', 'Identity and Security', 'Machine Learning', 'Management Tools', 'Networking', 'Storage Databases'];
	
	Sidebar.prototype.gcp2 = ['Paths', 'Zones', 'Service Cards', 'Compute', 'API Management', 'Security', 'Data Analytics', 'Data Transfer', 'Cloud AI', 'Internet of Things', 'Databases', 'Storage', 'Management Tools', 'Networking', 'Developer Tools', 'Expanded Product Cards', 'User Device Cards', 'Product Cards', 'General Icons', 'Icons AI and Machine Learning', 'Icons Compute', 'Icons Data Analytics', 'Icons Operations', 'Icons Networking', 'Icons CI CD', 'Icons API Management', 'Icons Internet of Things', 'Icons Databases', 'Icons Storage', 'Icons Security', 'Icons Migration', 'Icons Hybrid and Multi Cloud', 'Icons Open Source Icons'];
	
	Sidebar.prototype.gcpicons = ['AI and Machine Learning', 'API Management', 'Compute', 'Data Analytics', 'Databases', 'Developer Tools', 'Expanded Product Card Icons', 'Generic', 'Hybrid and Multi Cloud', 'Security', 'Internet of Things', 'Management Tools', 'Migration', 'Networking', 'Open Source Icons', 'Storage'];
	
    Sidebar.prototype.rack = ['General', 'APC', 'Cisco', 'Dell', 'F5', 'HP', 'HPE Aruba Gateways Controllers', 'HPE Aruba Security', 'HPE Aruba Switches', 'IBM', 'Oracle'];
    
	Sidebar.prototype.pids = ['Agitators', 'Apparatus Elements', 'Centrifuges', 'Compressors', 'Compressors ISO', 'Crushers Grinding', 
                              'Driers', 'Engines', 'Feeders', 'Filters', 'Fittings', 'Flow Sensors', 'Heat Exchangers', 'Instruments', 'Misc',
                              'Mixers', 'Piping', 'Pumps', 'Pumps DIN', 'Pumps ISO', 'Separators', 'Shaping Machines', 'Valves', 'Vessels'];

	Sidebar.prototype.cisco = ['Buildings', 'Computers and Peripherals', 'Controllers and Modules', 'Directors', 'Hubs and Gateways', 'Misc',
	                           'Modems and Phones', 'People', 'Routers', 'Security', 'Servers', 'Storage', 'Switches', 'Wireless'];
	
	Sidebar.prototype.cisco19 = ['LAN Switching', 'Routing WAN', 'Network Management', 'Data Center', 'Wireless LAN', 'Collaboration', 'Security Clouds Connectors', 'Endpoint Client Device Icons', 'DNA SD Access', 'SD WAN Viptela', 'ETA Stealthwatch', 'SAFE'];

	Sidebar.prototype.cisco_safe = ['Architecture', 'Business Icons', 'Capability', 'Design', 'IoT Things Icons', 'People Places Things Icons', 'Security Icons', 'Technology Icons', 'Threat'];
	
	Sidebar.prototype.sysml = ['Model Elements', 'Blocks', 'Ports and Flows', 'Constraint Blocks', 'Activities', 'Interactions', 'State Machines', 
	                           'Use Cases', 'Allocations', 'Requirements', 'Profiles', 'Stereotypes'];

	Sidebar.prototype.eip = ['Message Construction', 'Message Routing', 'Message Transformation', 'Messaging Channels', 'Messaging Endpoints', 
	                         'Messaging Systems', 'System Management'];

	Sidebar.prototype.gmdl = ['Bottom Navigation', 'Bottom Sheets', 'Buttons', 'Cards', 'Chips', 'Dialogs', 'Dividers', 'Grid Lists', 'Icons', 'Lists', 'Menus', 'Misc', 'Pickers', 
	                          'Selection Controls', 'Sliders', 'Steppers', 'Tabs', 'Text Fields'];

	Sidebar.prototype.aws2 = ['Analytics', 'Application Services', 'Compute', 'Database', 'Developer Tools', 'Enterprise Applications', 'Game Development', 'General', 'Internet of Things',  
	                          'Management Tools', 'Mobile Services', 'Networking', 'On-Demand Workforce', 'SDKs', 'Security and Identity', 'Storage and Content Delivery', 'Groups'];

	Sidebar.prototype.aws3 = ['Analytics', 'Application Services', 'Artificial Intelligence', 'Business Productivity', 'Compute', 'Contact Center', 'Database', 'Desktop and App Streaming', 'Developer Tools', 
	                          'Game Development', 'General', 'Groups', 'Internet of Things',  
	                          'Management Tools', 'Messaging', 'Migration', 'Mobile Services', 'Networking and Content Delivery', 'On Demand Workforce', 'SDKs', 'Security Identity and Compliance', 'Storage'];
	
	Sidebar.prototype.aws4b = ['Arrows', 'General Resources', 'Illustrations', 'Groups Light', 'Groups Dark', 'Analytics', 'Application Integration', 'AR VR', 'Cost Management', 'Business Productivity', 'Compute', 'Customer Engagement',
							  'Database', 'Desktop App Streaming', 'Developer Tools', 'Game Development', 'Internet of Things', 'IoT Things', 'IoT Resources', 'Machine Learning', 'Management Tools',
							  'Media Services', 'Migration', 'Mobile Services', 'Network Content Delivery', 'Security Identity Compliance', 'Storage'];
	
	Sidebar.prototype.aws4 = ['Arrows', 'General Resources', 'Illustrations', 'Groups', 'Analytics', 'Application Integration', 'AR VR', 'Cloud Financial Management', 'Blockchain', 
							  'Business Applications', 'Compute', 'Containers', 'Customer Enablement', 'Customer Engagement',
							  'Database', 'Developer Tools', 'End User Computing', 'Front End Web Mobile', 'Game Tech', 'Internet of Things', 'IoT Things', 'IoT Resources', 'Machine Learning', 'Management Governance',
							  'Media Services', 'Migration Transfer', 'Network Content Delivery', 'Quantum Technologies', 'Robotics', 'Satellite', 'Serverless', 'Security Identity Compliance', 'Storage'];

	Sidebar.prototype.office = ['Clouds', 'Communications', 'Concepts', 'Databases', 'Devices', 'Security', 'Servers', 'Services', 'Sites', 'Users'];

	Sidebar.prototype.veeam = ['Data Center', 'Misc', 'Software', 'Storage', 'UsersStatus', 'VASComponents', 'Backup Replication', 'Products', 'VMs and Tape', '2D', '3D'];
	Sidebar.prototype.veeam2 = ['Auxiliary', 'Data Center', 'Features', 'General', 'Products and Components', 'Software', 'States', 'Storage', '3D'];

	Sidebar.prototype.archimate3 = ['Application', 'Business', 'Composite', 'Implementation and Migration', 'Motivation', 'Physical', 'Relationships', 'Strategy', 'Technology'];

	Sidebar.prototype.electrical = ['LogicGates', 'Resistors', 'Capacitors', 'Inductors', 'SwitchesRelays', 'Diodes', 'Sources', 'Transistors', 'Misc', 'Audio', 'PlcLadder', 'Abstract', 'Optical', 'VacuumTubes', 'Waveforms', 'Instruments', 'RotMech', 'Transmission'];

	/**
	 * Description of custom libraries, see https://www.drawio.com/doc/faq/configure-diagram-editor
	 */
	Sidebar.prototype.customEntries = null;
	
	/**
	 * Array of strings for the built-in libraries to be enabled in the more shapes dialog. Null means all,
	 * empty array means none, possible keys are listed for the libs parameter at
	 * 
	 * https://www.drawio.com/doc/faq/supported-url-parameters
	 */
	Sidebar.prototype.enabledLibraries = null;
	
	/**
	 * Maximum number of custom libraries to preload into the search index.
	 */
	Sidebar.prototype.maxPreloadCount = 2000;

	/**
	 *
	 */
	Sidebar.prototype.configuration = [{id: 'general', libs: ['general', 'misc', 'advanced']},
									   {id: 'uml'}, {id: 'uml25'}, {id: 'search'}, {id: 'er'},
	                                   {id: 'ios', prefix: 'ios', libs: [''/*prefix is library*/, '7icons', '7ui']}, 
	                                   {id: 'android', prefix: 'android', libs: [''/*prefix is library*/]}, {id: 'aws3d'},
	                                   {id: 'flowchart'}, {id: 'basic'}, {id: 'infographic'}, {id: 'arrows'}, {id: 'arrows2'}, {id: 'lean_mapping'}, {id: 'citrix'}, {id: 'azure'}, {id: 'network'}, {id: 'vvd'}, 
	                                   {id: 'sitemap'}, {id:'c4'}, {id: 'dfd'}, {id: 'threatModeling'}, {id : 'kubernetes'}, {id : 'cisco19', prefix: 'cisco19', libs: Sidebar.prototype.cisco19},
	                                   {id: 'mscae', prefix: 'mscae', libs: ['Companies', 'EnterpriseFlat', 'IntuneFlat', 'OMSFlat', 'System CenterFlat', 'AI and ML Service', 'Analytics Service', 'Compute Service', 'Compute Service VM', 'Container Service', 'Databases Service', 'DevOps Service', 'General Service', 'Identity Service', 'Integration Service', 'Internet of Things Service', 'Intune Service', 'Management and Governance Service', 'Management and Governance Service Media', 'Migrate Service', 'Mixed Reality Service', 'Mobile Service', 'Networking Service', 'Other Category Service', 'Security Service', 'Storage Service', 'Web Service']},
	                                   {id: 'active_directory'},
	                                   {id: 'bpmn2', prefix: 'bpmn2', libs: ['General', 'Tasks', 'Choreographies', 'Events', 'Gateways']},
	                                   {id: 'clipart', prefix: null, libs: ['computer', 'finance', 'clipart', 'networking', 'people', 'telco']},
	                                   {id: 'allied_telesis', prefix: 'allied_telesis', libs: Sidebar.prototype.allied_telesis},
	                                   {id: 'cumulus', libs: ['cumulus']},
	                                   {id: 'eip', prefix: 'eip', libs: Sidebar.prototype.eip},
	                                   {id: 'mockups', prefix: 'mockup', libs: ['Buttons', 'Containers', 'Forms', 'Graphics', 'Markup', 'Misc', 'Navigation', 'Text']},
	                                   {id: 'pid2', prefix: 'pid2', libs: ['Agitators', 'Apparatus Elements', 'Centrifuges', 'Compressors', 'Compressors ISO', 'Crushers Grinding', 
	                                          	                          'Driers', 'Engines', 'Feeders', 'Filters', 'Fittings', 'Flow Sensors', 'Heat Exchangers', 'Instruments', 'Misc',
	                                        	                          'Mixers', 'Piping', 'Pumps', 'Pumps DIN', 'Pumps ISO', 'Separators', 'Shaping Machines', 'Valves', 'Vessels']},
           	                           {id: 'signs', prefix: 'signs', libs: Sidebar.prototype.signs},
           	                           {id: 'gcp', prefix: 'gcp', libs: Sidebar.prototype.gcp},
           	                           {id: 'gcp2', prefix: 'gcp2', libs: Sidebar.prototype.gcp2},
           	                           {id: 'gcpicons', prefix: 'gcpicons', libs: Sidebar.prototype.gcpicons},
           	                           {id: 'rack', prefix: 'rack', libs: Sidebar.prototype.rack},
           	                           {id: 'electrical', prefix: 'electrical', libs: Sidebar.prototype.electrical},
           	                           {id: 'aws2', prefix: 'aws2', libs: Sidebar.prototype.aws2},
           	                           {id: 'aws3', prefix: 'aws3', libs: Sidebar.prototype.aws3},
           	                           {id: 'aws4b', prefix: 'aws4b', libs: Sidebar.prototype.aws4b},
           	                           {id: 'aws4', prefix: 'aws4', libs: Sidebar.prototype.aws4},
           	                           {id: 'pid', prefix: 'pid', libs: Sidebar.prototype.pids},
           	                           {id: 'cisco', prefix: 'cisco', libs: Sidebar.prototype.cisco},
           	                           {id: 'cisco_safe', prefix: 'cisco_safe', libs: Sidebar.prototype.cisco_safe},
           	                           {id: 'office', prefix: 'office', libs: Sidebar.prototype.office},
           	                           {id: 'veeam', prefix: 'veeam', libs: Sidebar.prototype.veeam},
           	                           {id: 'veeam2', prefix: 'veeam2', libs: Sidebar.prototype.veeam2},
           	                           {id: 'cabinets', libs: ['cabinets']},
           	                           {id: 'floorplan', libs: ['floorplan']},
           	                           {id: 'bootstrap', libs: ['bootstrap']},
           	                           {id: 'atlassian', libs: ['atlassian']},
	                                   {id: 'fluid_power', libs: ['fluid_power']},
	                                   {id: 'gmdl', prefix: 'gmdl', libs: Sidebar.prototype.gmdl},
           	                           {id: 'archimate3', prefix: 'archimate3', libs: Sidebar.prototype.archimate3},
           	                           {id: 'archimate', libs: ['archimate']},
           	                           {id: 'webicons', libs: ['webicons', 'weblogos']},
           	                           {id: 'sysml', prefix: 'sysml', libs: Sidebar.prototype.sysml}];
	
	/**
	 * Removes disabled libraries from search results.
	 */
	var sidebarAddEntry = Sidebar.prototype.addEntry;

	Sidebar.prototype.addEntry = function(tags, fn)
	{
		if (this.currentSearchEntryLibrary != null && this.enabledLibraries != null &&
			mxUtils.indexOf(this.enabledLibraries, this.currentSearchEntryLibrary.id) < 0)
		{
			return fn;
		}
		else
		{
			return sidebarAddEntry.apply(this, arguments);
		}	
	};

	/**
	 * Refreshes scratchpad.
	 */
	var sidebarRefresh = Sidebar.prototype.refresh;
	Sidebar.prototype.refresh = function()
	{
		var ui = this.editorUi;
		sidebarRefresh.apply(this, arguments);

		if (ui.scratchpad != null)
		{
			ui.loadLibrary(new StorageLibrary(ui,
				ui.scratchpad.getData(),
				'.scratchpad'));
		}
	};
	
	/**
	 * Toggle palette.
	 */
	Sidebar.prototype.togglePalettes = function(prefix, ids)
	{
		this.showPalettes(prefix, ids);
	};

	/**
	 * Toggle palette.
	 */
	Sidebar.prototype.togglePalette = function(id)
	{
		this.showPalette(id);
	};
	
	/**
	 * Shows or hides palettes.
	 */
	Sidebar.prototype.showPalettes = function(prefix, ids, visible)
	{
		for (var i = 0; i < ids.length; i++)
		{
			this.showPalette(prefix + ids[i], visible);
		}
	};

	/**
	 * Shows or hides a palette.
	 */
	Sidebar.prototype.showPalette = function(id, visible)
	{
		var elts = this.palettes[id];
		
		if (elts != null)
		{
			var vis = (visible != null) ? ((visible) ? 'block' : 'none') :
				(elts[0].style.display == 'none') ? 'block' : 'none';
			
			for (var i = 0; i < elts.length; i++)
			{
				elts[i].style.display = vis;
			}
		}
		
		return elts;
	};
	
	/**
	 * 
	 */
	Sidebar.prototype.getConfigurationById = function(id)
	{
		for (var i = 0; i < this.configuration.length; i++)
		{
			if (this.configuration[i].id == id)
			{
				return this.configuration[i];
			}
		}
		
		if (this.customEntries != null)
		{
			for (var i = 0; i < this.customEntries.length; i++)
			{
				var section = this.customEntries[i] || {};
				
				for (var j = 0; section.entries != null && j < section.entries.length; j++)
				{
					var entry = section.entries[j];
					
					if (entry.id == id)
					{
						return {id: entry.id, libs: entry.libs};
					}
				}
			}
		}
		
		return null;
	};
	
	/**
	 * 
	 */
	Sidebar.prototype.isEntryVisible = function(key)
	{
		if (key == '.scratchpad')
		{
			return this.editorUi.scratchpad != null;
		}
		else
		{
			var config = this.getConfigurationById(key);
			
			if (config != null)
			{
				var id = (config.libs != null) ? ((config.prefix || '') + config.libs[0]) : key;
				var elts = this.palettes[id];

				if (elts != null)
				{
					return elts[0].style.display != 'none';
				}
			}
			
			if (this.customEntries != null)
			{
				for (var i = 0; i < this.customEntries.length; i++)
				{
					var section = this.customEntries[i] || {};
					
					for (var j = 0; section.entries != null && j < section.entries.length; j++)
					{
						var entry = section.entries[j];
						
						if (entry.id == key)
						{
							if (entry.libs != null && entry.libs.length > 0)
							{
								var elts = this.palettes[entry.id + '.0'];
								
								if (elts != null)
								{
									return elts[0].style.display != 'none';
								}
							}
						
							break;
						}
					}
				}
			}
			
			return false;
		}
	};

	/**
	 * 
	 */
	Sidebar.prototype.showEntries = function(entries, remember, force)
	{
		var all = [];
		
		if (remember)
		{
			mxSettings.setLibraries(entries);
			mxSettings.save();
		}
		
		if (entries != null && (force || entries.length > 0))
		{
			all.push(entries);
		}
		else 
		{
			var done = false;
			
			if (urlParams['libs'] != null && urlParams['libs'].length > 0) 
			{
				all.push(decodeURIComponent(urlParams['libs']));
				done = this.editorUi.getServiceName() == 'draw.io';
			}
			
			// Libs parameter overrides configuration for online app so that
			// links can be created to show just the specifies libraries
			if (!done)
			{
				if (mxSettings != null && mxSettings.settings != null) 
				{
					all.push(mxSettings.getLibraries());
				}
				else 
				{
					all.push(this.defaultEntries);
				}
			}
		}
		
		// Merges array of semicolon separated strings into a single array
		var temp = all.join(';').split(';');

		// Resolves aliases and creates lookup
		var visible = {};
		
		for (var i = 0; i < temp.length; i++)
		{
			visible[this.libAliases[temp[i]] || temp[i]] = true; 
		}
		
		for (var i = 0; i < this.configuration.length; i++)
		{
			// Search has separate switch in Extras menu
			if (this.configuration[i].id != 'search')
			{
				this.showPalettes(this.configuration[i].prefix || '',
					this.configuration[i].libs || [this.configuration[i].id],
					visible[this.configuration[i].id] == true);

			}
		}
		
		if (this.customEntries != null)
		{
			for (var i = 0; i < this.customEntries.length; i++)
			{
				var section = this.customEntries[i] || {};
				
				for (var j = 0; section.entries != null && j < section.entries.length; j++)
				{
					var entry = section.entries[j];
					
					if (entry.libs != null && entry.libs.length > 0)
					{
						var libs = [];
						
						for (var k = 0; k < entry.libs.length; k++)
						{
							libs.push(entry.id + '.' + k);
						}
						
						this.showPalettes('', libs, visible[entry.id]);
					}
				}
			}
		}
	};
	
	/**
	 * Overrides the sidebar init.
	 */
	Sidebar.prototype.init = function()
	{
		this.updateEntries();

		// Uses search.xml index file instead (faster load times)
		this.addStencilsToIndex = false;
		
		// Contains additional tags for shapes
		this.shapetags = {};

		// Adds tags from compressed text file for improved searches
		if (this.tagIndex != null)
		{
			this.addTagIndex(Graph.decompress(this.tagIndex));
			this.tagIndex = null;	
		}
		
		this.initPalettes();
	};
	 
	/**
	 * Defines all entries for the sidebar. This is used in the MoreShapes dialog. Create screenshots using the savesidebar URL parameter and
	 * http://www.alderg.com/merge.html for creating a vertical stack of PNG images if multiple sidebars are part of an entry.
	 */
	Sidebar.prototype.updateEntries = function()
	{
		var stdEntries = [{title: mxResources.get('general'), id: 'general', image: IMAGE_PATH + '/sidebar-general.png'},
			{title: mxResources.get('basic'), id: 'basic', image: IMAGE_PATH + '/sidebar-basic.png'},
			{title: mxResources.get('arrows'), id: 'arrows2', image: IMAGE_PATH + '/sidebar-arrows2.png'},
			{title: mxResources.get('clipart'), id: 'clipart', image: IMAGE_PATH + '/sidebar-clipart.png'},
			{title: mxResources.get('flowchart'), id: 'flowchart', image: IMAGE_PATH + '/sidebar-flowchart.png'}];
		
		if (Editor.currentTheme == 'sketch' ||
			Editor.currentTheme == 'min')
		{
			stdEntries = [{title: mxResources.get('searchShapes'), id: 'search'},
				{title: mxResources.get('scratchpad'), id: '.scratchpad'}].
				concat(stdEntries);
		}

		this.entries = [{title: mxResources.get('standard'), entries: stdEntries},
            			{title: mxResources.get('software'),
            			entries: [{title: 'Active Directory', id: 'active_directory', image: IMAGE_PATH + '/sidebar-active_directory.png'},
								{title: mxResources.get('android'), id: 'android', image: IMAGE_PATH + '/sidebar-android.png'},
								{title: 'Atlassian', id: 'atlassian', image: IMAGE_PATH + '/sidebar-atlassian.png'},
								{title: mxResources.get('bootstrap'), id: 'bootstrap', image: IMAGE_PATH + '/sidebar-bootstrap.png'},
								{title: 'C4', id: 'c4', image: IMAGE_PATH + '/sidebar-c4.png'},
								{title: 'Data Flow Diagram', id: 'dfd', image: IMAGE_PATH + '/sidebar-dfd.png'},
								{title: mxResources.get('entityRelation'), id: 'er', image: IMAGE_PATH + '/sidebar-er.png'},
								{title: mxResources.get('ios'), id: 'ios', image: IMAGE_PATH + '/sidebar-ios.png'},
								{title: mxResources.get('mockups'), id: 'mockups', image: IMAGE_PATH + '/sidebar-mockups.png'},
								{title: 'Sitemap', id: 'sitemap', image: IMAGE_PATH + '/sidebar-sitemap.png'},
								{title: mxResources.get('uml') + ' 2.5', id: 'uml25', image: IMAGE_PATH + '/sidebar-uml25.png'},
								{title: mxResources.get('uml'), id: 'uml', image: IMAGE_PATH + '/sidebar-uml.png'}]},
            			{title: mxResources.get('networking'),
            			entries: [{title: 'Allied Telesis', id: 'allied_telesis', image: IMAGE_PATH + '/sidebar-allied_telesis.png'},
								{title: 'AWS17', id: 'aws3', image: IMAGE_PATH + '/sidebar-aws3.png'},
								{title: 'AWS18', id: 'aws4b', image: IMAGE_PATH + '/sidebar-aws4b.png'},
								{title: 'AWS19', id: 'aws4', image: IMAGE_PATH + '/sidebar-aws4.png'},
								// TODO: Add isometric containers  		                          
								{title: mxResources.get('aws3d'), id: 'aws3d', image: IMAGE_PATH + '/sidebar-aws3d.png'},
								{title: mxResources.get('azure'), id: 'azure2', image: IMAGE_PATH + '/sidebar-azure.png'},
								{title: 'Cloud & Enterprise', id: 'mscae', image: IMAGE_PATH + '/sidebar-mscae.png'},
								{title: mxResources.get('cisco'), id: 'cisco', image: IMAGE_PATH + '/sidebar-cisco.png'},
								{title: 'Cisco19', id: 'cisco19', image: IMAGE_PATH + '/sidebar-cisco19.png'},
								{title: 'Cisco Safe', id: 'cisco_safe', image: IMAGE_PATH + '/sidebar-cisco_safe.png'},
								{title: 'Cumulus', id: 'cumulus', image: IMAGE_PATH + '/sidebar-cumulus.png'},
								{title: 'Citrix', id: 'citrix', image: IMAGE_PATH + '/sidebar-citrix.png'},
								{title: 'Google Cloud Platform', id: 'gcp2', image: IMAGE_PATH + '/sidebar-gcp2.png'},
								{title: 'GCP Icons', id: 'gcpicons', image: IMAGE_PATH + '/sidebar-gcpicons.png'},
								{title: 'IBM', id: 'ibm', image: IMAGE_PATH + '/sidebar-ibm.png'},
								{title: 'Kubernetes', id: 'kubernetes', image: IMAGE_PATH + '/sidebar-kubernetes.png'},
								{title: 'Network', id: 'network', image: IMAGE_PATH + '/sidebar-network.png'},
								{title: 'Office', id: 'office', image: IMAGE_PATH + '/sidebar-office.png'},
								{title: mxResources.get('rack'), id: 'rack', image: IMAGE_PATH + '/sidebar-rack.png'},
								{title: 'Veeam', id: 'veeam2', image: IMAGE_PATH + '/sidebar-veeam.png'},
								{title: 'VMware', id: 'vvd', image: IMAGE_PATH + '/sidebar-vvd.png'}]},
            			{title: mxResources.get('business'),
            			entries: [{title: 'ArchiMate 3.0', id: 'archimate3', image: IMAGE_PATH + '/sidebar-archimate3.png'},
								{title: mxResources.get('archiMate21'), id: 'archimate', image: IMAGE_PATH + '/sidebar-archimate.png'},
								{title: mxResources.get('bpmn') + ' 2.0', id: 'bpmn2', image: IMAGE_PATH + '/sidebar-bpmn.png'},
								{title: mxResources.get('sysml'), id: 'sysml', image: IMAGE_PATH + '/sidebar-sysml.png'},
								{title: 'Value Stream Mapping', id: 'lean_mapping', image: IMAGE_PATH + '/sidebar-leanmapping.png'}]},
            			{title: mxResources.get('other'),
            			entries: [{title: mxResources.get('cabinets'), id: 'cabinets', image: IMAGE_PATH + '/sidebar-cabinets.png'},
								{title: 'Infographic', id: 'infographic', image: IMAGE_PATH + '/sidebar-infographic.png'},
								{title: mxResources.get('eip'), id: 'eip', image: IMAGE_PATH + '/sidebar-eip.png'},
								{title: mxResources.get('electrical'), id: 'electrical', image: IMAGE_PATH + '/sidebar-electrical.png'},
								{title: mxResources.get('floorplans'), id: 'floorplan', image: IMAGE_PATH + '/sidebar-floorplans.png'},
								{title: 'Fluid Power (ISO 1219)', id: 'fluid_power', image: IMAGE_PATH + '/sidebar-fluid_power.png'},
								{title: mxResources.get('gmdl'), id: 'gmdl', image: IMAGE_PATH + '/sidebar-gmdl.png'},
								{title: mxResources.get('procEng'), id: 'pid', image: IMAGE_PATH + '/sidebar-pid.png'},
								{title: 'Threat Modeling', id: 'threatModeling', image: IMAGE_PATH + '/sidebar-threatmodeling.png'},
								{title: 'Web Icons', id: 'webicons', image: IMAGE_PATH + '/sidebar-webIcons.png'},
								{title: mxResources.get('signs'), id: 'signs', image: IMAGE_PATH + '/sidebar-signs.png'}]}];

	};

	/**
	 * Overridden to add image export via servlet
	 */
	if (urlParams['savesidebar'] == '1')
	{
		Sidebar.prototype.addFoldingHandler = function(title, content, funct)
		{
			var initialized = false;
	
			// Avoids mixed content warning in IE6-8
			if (!mxClient.IS_IE || document.documentMode >= 8)
			{
				title.style.backgroundImage = (content.style.display == 'none') ?
					'url(\'' + this.collapsedImage + '\')' : 'url(\'' + this.expandedImage + '\')';
			}
			
			title.style.backgroundRepeat = 'no-repeat';
			title.style.backgroundPosition = '0% 50%';
	
			var btn = document.createElement('button');
			btn.style.marginLeft = '4px';
			mxUtils.write(btn, 'Save');
			
			mxEvent.addListener(title, 'click', mxUtils.bind(this, function(evt)
			{
				if (mxEvent.getSource(evt).nodeName == 'BUTTON')
				{
					var svgs = content.getElementsByTagName('svg');
					var w = 456;
					var h = (Math.ceil(svgs.length / 6) + 1) * this.thumbHeight;
					var root = Graph.createSvgNode(0, 0, w, h, '#ffffff');
					
					// Adds title
					var canvas = new mxSvgCanvas2D(root);
					canvas.setFontFamily(mxConstants.DEFAULT_FONTFAMILY);
					canvas.setFontStyle(mxConstants.FONT_BOLD);
					canvas.setFontColor('rgb(80, 80, 80)');
					canvas.setFontSize(14);

					// Extracts title text
					var children = title.childNodes;

					for (var i = 0; i < children.length; i++)
					{
						if (children[i].nodeType == mxConstants.NODETYPE_TEXT)
						{
							canvas.plainText(6, 0, 0, 0, mxUtils.getTextContent(children[i]));

							break;
						}
					}

					for (var i = 0; i < svgs.length; i++)
					{
						var svg = svgs[i];
						var clone = svg.cloneNode(true);
						clone.removeAttribute('style');
						clone.setAttribute('width', this.thumbWidth);
						clone.setAttribute('height', this.thumbHeight);
						clone.setAttribute('x', 12 + mxUtils.mod(i, 6) * 68);
						clone.setAttribute('y', 24 + Math.floor(i / 6) * 68);
						root.appendChild(clone);
					}

					this.editorUi.editor.convertImages(root, mxUtils.bind(this, function(body)
					{
						var canvas = document.createElement('canvas');
						canvas.width = w;
						canvas.height = h;
					
						var img = document.createElement('img');
						img.onload = mxUtils.bind(this, function()
						{
							var ctx = canvas.getContext('2d');
							ctx.drawImage(img, 0, 0)
							this.editorUi.saveCanvas(canvas, null, 'png');
						});

						var xml = Graph.xmlDeclaration + '\n' + Graph.svgDoctype + '\n' + mxUtils.getXml(root);
						img.src = Editor.createSvgDataUri(xml);
					}));
					
					return;
				}
				
				if (content.style.display == 'none')
				{
					if (!initialized)
					{
						initialized = true;
						
						if (funct != null)
						{
							if (btn.parentNode != null)
							{
								btn.parentNode.removeChild(btn);
							}
							
							// Wait cursor does not show up on Mac
							title.style.cursor = 'wait';
							var prev = title.innerHTML;
							title.innerHTML = mxResources.get('loading') + '...';
							
							window.setTimeout(function()
							{
								funct(content);
								title.style.cursor = '';
								title.innerHTML = prev;
								title.appendChild(btn);
							}, 0);
						}
						else
						{
							title.appendChild(btn);
						}
					}
					else
					{
						title.appendChild(btn);
					}
					
					title.style.backgroundImage = 'url(\'' + this.expandedImage + '\')';
					content.style.display = 'block';
				}
				else
				{
					title.style.backgroundImage = 'url(\'' + this.collapsedImage + '\')';
					content.style.display = 'none';
					
					if (btn.parentNode != null)
					{
						btn.parentNode.removeChild(btn);
					}
				}
				
				mxEvent.consume(evt);
			}));
		};
	};
	
	/**
	 * Overridden to use shapetags to improve search results.
	 */
	Sidebar.prototype.extractShapeStyle = function(style)
	{
		if (style != null && style.substring(0, 6) == 'shape=')
		{
			var semi = style.indexOf(';');
			
			if (semi < 0)
			{
				semi = style.length;
			}
			
			return style.substring(6, semi);
		}
		
		return null;
	};
	
	/**
	 * Overridden to use shapetags to improve search results.
	 */
	var sidebarGetTagsForStencil = Sidebar.prototype.getTagsForStencil;
	
	Sidebar.prototype.getTagsForStencil = function(pkg, stc, moreTags)
	{
		var tags = sidebarGetTagsForStencil.apply(this, arguments);
		
		// Adds tags from tags file
		if (this.shapetags != null)
		{
			pkg = pkg.toLowerCase();
			stc = stc.toLowerCase();
			
			if (this.shapetags[pkg] != null)
			{
				tags.push(this.shapetags[pkg]);
			}
			
			stc = pkg + '.' + stc;
			
			if (this.shapetags[stc] != null)
			{
				tags.push(this.shapetags[stc]);
			}
		}

		return tags;
	};
	
	/**
	 * Overrides the sidebar init.
	 */
	Sidebar.prototype.addTagIndex = function(text)
	{
		var lines = text.split('\n');
		
		for (var i = 0; i < lines.length; i++)
		{
			if (lines[i] != null)
			{
				var tags = lines[i].split('\t');
				
				if (tags.length > 1)
				{
					var key = tags[0].toLowerCase().replace(' ', '_');
					var value = mxUtils.trim(tags.slice(1, tags.length).join(' ').toLowerCase());
					
					if (value.length > 0)
					{
						this.shapetags[key] = value;
					}
				}
			}
		}
	};
		
	/**
	 * Adds shape search UI.
	 */
	Sidebar.prototype.showPopupMenuForEntry = function(elt, libs, evt)
	{
		if (libs != null && libs.length > 0)
		{
			var offset = mxUtils.getOffset(elt);
		
			this.editorUi.showPopupMenu(mxUtils.bind(this, function(menu, parent)
			{
				menu.addItem(mxResources.get('openLibrary'), null, mxUtils.bind(this, function()
				{
					for (var i = 0; i < libs.length; i++)
					{
						(mxUtils.bind(this, function(lib)
						{
							var config = this.getConfigurationById(lib.id);
							
							if (config != null)
							{
								this.showPalettes(config.prefix || '', config.libs || [config.id], true);
								var elts = this.showPalette(libs[i].lib || libs[i].id, true);
								
								if (elts != null && elts.length > 1 && elts[1].firstChild != null &&
									(elts[1].firstChild.firstChild == null ||
									elts[1].firstChild.style.display == 'none'))
								{
									elts[0].click();
								}
								
								window.setTimeout(function()
								{
									elts[1].scrollIntoView(true);
								}, 0);
								
								mxEvent.consume(evt);
							}
						}))(libs[i]);
					}
				}));
			}), offset.x, offset.y + elt.offsetHeight, evt);
		}
	};

	/**
	 * Overrides the sidebar init.
	 */
	Sidebar.prototype.addSearchIndex = function(shapes)
	{
		if (shapes != null)
		{
			for (var i = 0; i < shapes.length; i++)
			{
				if (shapes[i].style != null)
				{
					var style = shapes[i].style;
					var shapeStyle = this.extractShapeStyle(style);
					
					if (shapeStyle != null)
					{
						var lastDot = shapeStyle.lastIndexOf('.');
						
						if (lastDot > 0)
						{
							var pkg = shapeStyle.substring(0, lastDot);
							var stc = shapeStyle.substring(lastDot + 1, shapeStyle.length);
							var tags = this.getTagsForStencil(pkg, stc, shapes[i].tags);
							
							// TODO: Use shapetags for programmatic stencils
							if (tags != null)
							{
								// Converts stencil name to lowercase
								var semi = style.indexOf(';');
								style = 'shape=' + pkg + '.' + stc.toLowerCase() + ';' +
									((semi < 0) ? '' : style.substring(semi + 1));
								this.setCurrentSearchEntryLibrary(shapes[i].id, shapes[i].lib);
								this.createVertexTemplateEntry(style, parseInt(shapes[i].w),
										parseInt(shapes[i].h), '', stc.replace(/_/g, ' '),
										null, null, this.filterTags(tags.join(' ')));
								this.setCurrentSearchEntryLibrary();
							}
						}
					}
				}
			}
		}
	};
	
	/**
	 * Overrides the sidebar init.
	 */
	Sidebar.prototype.initPalettes = function()
	{
		var imgDir = GRAPH_IMAGE_PATH;
		var dir = STENCIL_PATH;
		var signs = this.signs;
		var rack = this.rack;
		var pids = this.pids;
		var cisco = this.cisco;
		var sysml = this.sysml;
		
		if (urlParams['createindex'] == '1')
		{
			this.createdSearchIndex = [];
		}

		this.addSearchPalette(true);
		
		
		this.addGeneralPalette(this.customEntries == null);
		this.addMiscPalette(false);	
		//this.addAdvancedPalette(false);
		this.addBasicPalette();
		this.addStencilPalette('arrows', mxResources.get('arrows'), dir + '/arrows.xml',
				';html=1;' + mxConstants.STYLE_VERTICAL_LABEL_POSITION + '=bottom;' + mxConstants.STYLE_VERTICAL_ALIGN + '=top;' + mxConstants.STYLE_STROKEWIDTH + '=2;strokeColor=#000000;',
				null, null, null, null, null, 'arrows');
		this.addArrows2Palette();
		
		this.setCurrentSearchEntryLibrary('clipart', 'computer');
		this.addImagePalette('computer', 'Clipart / Computer', imgDir
				+ '/lib/clip_art/computers/', '_128x128.png', ['Antivirus',
				'Data_Filtering', 'Database', 'Database_Add', 'Database_Minus',
				'Database_Move_Stack', 'Database_Remove', 'Fujitsu_Tablet',
				'Harddrive', 'IBM_Tablet', 'iMac', 'iPad', 'Laptop', 'MacBook',
				'Mainframe', 'Monitor', 'Monitor_Tower',
				'Monitor_Tower_Behind', 'Netbook', 'Network', 'Network_2',
				'Printer', 'Printer_Commercial', 'Secure_System', 'Server',
				'Server_Rack', 'Server_Rack_Empty', 'Server_Rack_Partial',
				'Server_Tower', 'Software', 'Stylus', 'Touch', 'USB_Hub',
				'Virtual_Application', 'Virtual_Machine', 'Virus',
				'Workstation' ], [ 'Antivirus', 'Data Filtering', 'Database',
	            'Database Add', 'Database Minus', 'Database Move Stack',
	            'Database Remove', 'Fujitsu Tablet', 'Harddrive', 'IBMTablet',
	            'iMac', 'iPad', 'Laptop', 'MacBook', 'Mainframe', 'Monitor',
	            'Monitor Tower', 'Monitor Tower Behind', 'Netbook', 'Network',
	            'Network 2', 'Printer', 'Printer Commercial', 'Secure System',
	            'Server', 'Server Rack', 'Server Rack Empty', 'Server Rack Partial',
	            'Server Tower', 'Software', 'Stylus', 'Touch', 'USB Hub',
	            'Virtual Application', 'Virtual Machine', 'Virus', 'Workstation']);
		
		this.setCurrentSearchEntryLibrary('clipart', 'finance');		
		this.addImagePalette('finance', 'Clipart / Finance', imgDir
				+ '/lib/clip_art/finance/', '_128x128.png', [ 'Arrow_Down',
				'Arrow_Up', 'Coins', 'Credit_Card', 'Dollar', 'Graph',
				'Pie_Chart', 'Piggy_Bank', 'Safe', 'Shopping_Cart',
				'Stock_Down', 'Stock_Up'], ['Arrow_Down', 'Arrow Up',
	            'Coins', 'Credit Card', 'Dollar', 'Graph', 'Pie Chart',
	            'Piggy Bank', 'Safe', 'Shopping Basket', 'Stock Down', 'Stock Up']);
		
		this.setCurrentSearchEntryLibrary('clipart', 'clipart');		
		this.addImagePalette('clipart', 'Clipart / Various', imgDir
				+ '/lib/clip_art/general/', '_128x128.png', [ 'Battery_0',
				'Battery_100', 'Battery_50', 'Battery_75', 'Battery_allstates',
				'Bluetooth', 'Earth_globe', 'Empty_Folder', 'Full_Folder',
				'Gear', 'Keys', 'Lock', 'Mouse_Pointer', 'Plug', 'Ships_Wheel',
				'Star', 'Tire' ], [ 'Battery 0%', 'Battery 100%', 'Battery 50%',
	            'Battery 75%', 'Battery', 'Bluetooth', 'Globe',
	            'Empty Folder', 'Full Folder', 'Gear', 'Keys', 'Lock', 'Mousepointer',
	            'Plug', 'Ships Wheel', 'Star', 'Tire']);
		
		this.setCurrentSearchEntryLibrary('clipart', 'networking');
		this.addImagePalette('networking', 'Clipart / Networking', imgDir
				+ '/lib/clip_art/networking/', '_128x128.png', ['Bridge',
				'Certificate', 'Certificate_Off', 'Cloud', 'Cloud_Computer',
				'Cloud_Computer_Private', 'Cloud_Rack', 'Cloud_Rack_Private',
				'Cloud_Server', 'Cloud_Server_Private', 'Cloud_Storage',
				'Concentrator', 'Email', 'Firewall_02', 'Firewall',
				'Firewall-page1', 'Ip_Camera', 'Modem',
				'power_distribution_unit', 'Print_Server',
				'Print_Server_Wireless', 'Repeater', 'Router', 'Router_Icon',
				'Switch', 'UPS', 'Wireless_Router', 'Wireless_Router_N'],
				['Bridge', 'Certificate', 'Certificate Off', 'Cloud', 'Cloud Computer',
				'Cloud Computer Private', 'Cloud Rack', 'Cloud Rack Private',
				'Cloud Server', 'Cloud Server Private', 'Cloud Storage',
				'Concentrator', 'Email', 'Firewall 1', 'Firewall 2',
				'Firewall', 'Camera', 'Modem',
				'Power Distribution Unit', 'Print Server',
				'Print Server Wireless', 'Repeater', 'Router', 'Router Icon',
				'Switch', 'UPS', 'Wireless Router', 'Wireless Router N'],
				 {'Wireless_Router': 'wireless router switch wap wifi access point wlan',
				  'Wireless_Router_N': 'wireless router switch wap wifi access point wlan',
				  'Router': 'router switch',
				  'Router_Icon': 'router switch'});
		
		this.setCurrentSearchEntryLibrary('clipart', 'people');
		this.addImagePalette('people', 'Clipart / People', imgDir
				+ '/lib/clip_art/people/', '_128x128.png', ['Suit_Man',
				'Suit_Man_Black', 'Suit_Man_Blue', 'Suit_Man_Green',
				'Suit_Man_Green_Black', 'Suit_Woman', 'Suit_Woman_Black',
				'Suit_Woman_Blue', 'Suit_Woman_Green',
				'Suit_Woman_Green_Black', 'Construction_Worker_Man',
				'Construction_Worker_Man_Black', 'Construction_Worker_Woman',
				'Construction_Worker_Woman_Black', 'Doctor_Man',
				'Doctor_Man_Black', 'Doctor_Woman', 'Doctor_Woman_Black',
				'Farmer_Man', 'Farmer_Man_Black', 'Farmer_Woman',
				'Farmer_Woman_Black', 'Nurse_Man', 'Nurse_Man_Black',
				'Nurse_Woman',
				'Nurse_Woman_Black',
				'Military_Officer', 'Military_Officer_Black',
				'Military_Officer_Woman', 'Military_Officer_Woman_Black',
				'Pilot_Man', 'Pilot_Man_Black', 'Pilot_Woman',
				'Pilot_Woman_Black', 'Scientist_Man', 'Scientist_Man_Black',
				'Scientist_Woman', 'Scientist_Woman_Black', 'Security_Man',
				'Security_Man_Black', 'Security_Woman', 'Security_Woman_Black',
				'Tech_Man', 'Tech_Man_Black',
				'Telesales_Man', 'Telesales_Man_Black', 'Telesales_Woman',
				'Telesales_Woman_Black', 'Waiter', 'Waiter_Black',
				'Waiter_Woman', 'Waiter_Woman_Black', 'Worker_Black',
				'Worker_Man', 'Worker_Woman', 'Worker_Woman_Black']);
		
		this.setCurrentSearchEntryLibrary('clipart', 'telco');
		/*this.addImagePalette('telco', 'Clipart / Telecommunication', imgDir
				+ '/lib/clip_art/telecommunication/', '_128x128.png', [
				'BlackBerry', 'Cellphone', 'HTC_smartphone', 'iPhone',
				'Palm_Treo', 'Signal_tower_off', 'Signal_tower_on' ],
				['BlackBerry', 'Cellphone', 'HTC smartphone', 'iPhone',
				  'Palm Treo', 'Signaltower off', 'Signaltower on']);
		this.setCurrentSearchEntryLibrary();*/

		/*this.addFlowchartPalette();
		this.addActiveDirectoryPalette();
		this.addAndroidPalette();
		this.addAtlassianPalette();
		this.addBootstrapPalette();
		this.addDFDPalette();*/
		this.addErPalette();
		/*this.addIos7Palette();
		this.addIosPalette();
		this.addKubernetesPalette();
		this.addMockupPalette();
		this.addSitemapPalette();*/
		this.addUml25Palette();
		this.addUmlPalette(false);
		/*this.addAlliedTelesisPalette();
		this.addAWS3Palette();
		this.addAWS4bPalette();
		this.addAWS4Palette();*/
		this.addAWS3DPalette();
		/*this.addAzurePalette();
		this.addAzure2Palette();
		this.addMSCAEPalette();
		this.addC4Palette();
		this.addCiscoPalette(cisco, dir);
		this.addCisco19Palette();
		this.addCiscoSafePalette();
		this.addCumulusPalette();
		this.addCitrixPalette();
		this.addGCP2Palette();
		this.addGCPIconsPalette();
		this.addIBMPalette();
		this.addNetworkPalette();
		this.addOfficePalette();
		this.addRackPalette(rack, dir);
		this.addVeeamPalette();
		this.addVeeam2Palette();
		this.addVVDPalette();*/
		this.addArchimate3Palette();
		this.addArchiMatePalette();
		this.addBpmn2Palette();
		/*this.addSysMLPalette(sysml, dir);
		this.addLeanMappingPalette();
		this.addCabinetsPalette();
		this.addInfographicPalette();
		this.addEipPalette();
		this.addElectricalPalette();
		this.addFloorplanPalette();
		this.addFluidPowerPalette();
		this.addGMDLPalette();
		this.addPidPalette(pids, dir);
		this.addThreatModelingPalette();
		this.addWebIconsPalette();
		this.addWebLogosPalette();
		this.addSignsPalette(signs, dir);*/
		// LATER: Check if conflicts with restore libs after loading file


		this.createdSearchIndex = [];

		// Adds custom sections first
		if (this.customEntries != null)
		{
			var preloadCount = 0;
			
			for (var i = 0; i < this.customEntries.length; i++)
			{
				var section = this.customEntries[i] || {};
				
				for (var j = 0; section.entries != null && j < section.entries.length; j++)
				{
					var entry = section.entries[j];
					
					for (var k = 0; k < entry.libs.length; k++)
					{
						(mxUtils.bind(this, function(lib)
						{
							var data = null;
							var error = null;
							var content = null;
							var title = null;
							
							var showError = mxUtils.bind(this, function(err, c)
							{
								var div = document.createElement('span');
								div.style.paddingBottom = '6px';
								div.style.paddingTop = '6px';
								div.style.fontSize = '11px';
								mxUtils.write(div, err);
								c.innerHTML = '<img align="top" src="' + mxGraph.prototype.warningImage.src + '"/> ';
								c.appendChild(div);
							});
							
							var barrier = mxUtils.bind(this, function()
							{
								if (content != null && title != null)
								{
									if (error != null)
									{
										content.style.display = 'block';
										title.innerText = '';
										mxUtils.write(title, this.editorUi.getResource(lib.title));
										showError(error, content);
									}
									else if (data != null)
									{
										this.editorUi.addLibraryEntries(data, content);
										content.style.display = 'block';
										title.innerText = '';
										mxUtils.write(title, this.editorUi.getResource(lib.title));
									}
									else
									{
										content.style.display = 'none';
										title.innerText = '';
										mxUtils.write(title, mxResources.get('loading') + '...');
									}
								}
							});
							
							if (lib.data == null && lib.url != null && (!lib.preload && preloadCount >= this.maxPreloadCount))
							{
								this.addPalette(entry.id + '.' + k, this.editorUi.getResource(lib.title),
									false, mxUtils.bind(this, function(content, title)
								{
									var dataLoaded = mxUtils.bind(this, function(images)
									{
										this.setCurrentSearchEntryLibrary(entry.id, entry.id + '.' + k);
										this.addEntries(images);
										this.setCurrentSearchEntryLibrary();
										this.editorUi.addLibraryEntries(images, content);
									});

									content.style.display = 'none';
									title.innerText = '';
									mxUtils.write(title, mxResources.get('loading') + '...');
									
									var url = lib.url;
									
									if (!this.editorUi.editor.isCorsEnabledForUrl(url))
									{
										url = PROXY_URL + '?url=' + encodeURIComponent(url);
									}
									
									this.editorUi.editor.loadUrl(url, mxUtils.bind(this, function(data)
									{
										content.style.display = 'block';
										title.innerText = '';
										mxUtils.write(title, this.editorUi.getResource(lib.title));

										try
										{
											var doc = mxUtils.parseXml(data);
											
											if (doc.documentElement.nodeName == 'mxlibrary')
											{
												var images = JSON.parse(mxUtils.getTextContent(doc.documentElement));
												dataLoaded(images);
											}
											else
											{
												showError(mxResources.get('notALibraryFile'), content);
											}
										}
										catch (e)
										{
											console.log("Lib loading err" + e.message);
											showError(mxResources.get('error') + ': ' + e.message, content);
										}
									}));
								}));
							}
							else
							{							
								this.addPalette(entry.id + '.' + k, this.editorUi.getResource(lib.title),
									false, mxUtils.bind(this, function(c, t)
								{
									content = c;
									title = t;
									barrier();
								}));
								
								if (lib.data != null)
								{
									this.setCurrentSearchEntryLibrary(entry.id, entry.id + '.' + k);
									this.addEntries(lib.data);
									this.setCurrentSearchEntryLibrary();
									data = lib.data;
									barrier();
								}
								else if (lib.url != null)
								{
									preloadCount++;					
									var url = lib.url;
									
									if (!this.editorUi.editor.isCorsEnabledForUrl(url))
									{
										url = PROXY_URL + '?url=' + encodeURIComponent(url);
									}
									
									this.editorUi.editor.loadUrl(url, mxUtils.bind(this, function(temp)
									{
										try
										{
											var doc = mxUtils.parseXml(temp);
											
											if (doc.documentElement.nodeName == 'mxlibrary')
											{
												data = JSON.parse(mxUtils.getTextContent(doc.documentElement));
												this.addEntries(data);
												barrier();
											}
											else
											{
												error = mxResources.get('notALibraryFile');
												barrier();
											}
										}
										catch (e)
										{
											console.log("Ext lib load err" + e.message);
											error = mxResources.get('error') + ': ' + e.message;
											barrier();
										}
									}), mxUtils.bind(this, function(e)
									{
										error = (e != null && e.message != null) ? e.message : e;
										barrier();
									}));
								}
								else
								{
									error = mxResources.get('invalidInput');
									barrier();
								}
							}
						}))(entry.libs[k]);
					}
				}
			}
		}
		







		this.showEntries();
		
		if (this.createdSearchIndex != null)
		{
			console.log('searchFileData', Graph.compress(JSON.stringify(this.createdSearchIndex)));
		}
	};
	
	/**
	 * Overridden to manually create search index for stencil files which are not pre-loaded
	 * and no entries are created programmatically.
	 */
	if (urlParams['createindex'] == '1')
	{
		var sidebarAddStencilPalette = Sidebar.prototype.addStencilPalette;
		
		Sidebar.prototype.addStencilPalette = function(id, title, stencilFile, style, ignore, onInit, scale, tags, customFns, groupId)
		{
			sidebarAddStencilPalette.apply(this, arguments);
			scale = (scale != null) ? scale : 1;
	
			// Used for creating index
			mxStencilRegistry.loadStencilSet(stencilFile, mxUtils.bind(this, function(packageName, stencilName, displayName, w, h)
			{
				if (this.createdSearchIndex != null && ignore == null || mxUtils.indexOf(ignore, stencilName) < 0)
				{
					var entry = {style: 'shape=' + packageName + stencilName + style,
						w: Math.round(w * scale), h: Math.round(h * scale)};
					var tmpTags = (tags != null) ? tags[stencilName] : null;
					
					if (tmpTags != null)
					{
						entry.tags = tmpTags;
					}
					
					if (groupId != null)
					{
						entry.id = groupId;
						entry.lib = id;
					}
					
					this.createdSearchIndex.push(entry);
				}
			}), true);
		};
	}

	/**
	 * Extracs icons from the search result.
	 */
	Sidebar.prototype.extractIconsFromResponse = function(res, results)
	{
		for (var i = 0; i < res.icons.length; i++)
		{
			var sizes = res.icons[i].raster_sizes;
			var index = sizes.length - 1;
			
			while (index > 0 && sizes[index].size > 128)
			{
				index--;
			}

			var size = sizes[index].size;
			var url = sizes[index].formats[0].preview_url;

			if (size != null && url != null)
			{
				(mxUtils.bind(this, function(s, u)
				{
					results.push(mxUtils.bind(this, function()
					{
						return this.createVertexTemplate('shape=image;html=1;verticalAlign=top;' +
							'verticalLabelPosition=bottom;labelBackgroundColor=#ffffff;imageAspect=0;' +
							'aspect=fixed;image=' + u, s, s, '');
					}));
				}))(size, url);
			}
		}
	};
	
	/**
	 * Adds server icon results to local search results
	 */
	var sidebarSearchEntries = Sidebar.prototype.searchEntries;
	
	Sidebar.prototype.searchEntries = function(searchTerms, count, page, success, error)
	{
		var succ = success;
		
		// Lazy-load indices
		if (this.searchIndexData != null)
		{
			this.addSearchIndex(JSON.parse(Graph.decompress(this.searchIndexData)));
			this.searchIndexData = null;
		}
		
		if (ICONSEARCH_PATH != null)
		{
			success = mxUtils.bind(this, function(results, len, more, terms)
			{
				if (!this.editorUi.isOffline() && results.length <= count / 4)
				{
					var pg = page - Math.ceil((len - count / 4) / count);
	
					mxUtils.get(ICONSEARCH_PATH + '?q=' + encodeURIComponent(searchTerms) +
						'&p=' + pg + '&c=' + count, mxUtils.bind(this, function(req)
					{
						try
						{
							// Ignore response if nothing or error returned
							if (req.getStatus() >= 200 && req.getStatus() <= 299 &&
								req.getText() != null && req.getText().length > 0)
							{
								try
								{
									var res = JSON.parse(req.getText());
									
									if (res == null || res.icons == null)
									{
										succ(results, len, false, terms);
										this.editorUi.handleError(res);
									}
									else
									{
										this.extractIconsFromResponse(res, results);
										succ(results, (page - 1) * count + results.length, res.icons.length == count, terms);
									}
								}
								catch (e)
								{
									succ(results, len, false, terms);
									this.editorUi.handleError(e);
								}
							}
							else
							{
								succ(results, len, false, terms);
							}
						}
						catch (e)
						{
							succ(results, len, false, terms);
							this.editorUi.handleError(e);
						}
					},
					function()
					{
						succ(results, len, false, terms);
					}));
				}
				else
				{
					succ(results, len, more || !this.editorUi.isOffline(), terms);
				}
			});
		}
		
		sidebarSearchEntries.apply(this, arguments);
	};
	
	// Fixes sidebar tooltips (previews)
	var sidebarGetTooltipOffset = Sidebar.prototype.getTooltipOffset;
	
	Sidebar.prototype.getTooltipOffset = function(elt, bounds)
	{
		if (Editor.currentTheme == 'simple' ||
			Editor.currentTheme == 'sketch' || 
			Editor.currentTheme == 'min')
		{
			if (mxUtils.isAncestorNode(this.editorUi.sketchPickerMenuElt, elt))
			{
				var off = mxUtils.getOffset(elt);

				if (Editor.currentTheme == 'simple')
				{
					off.x += (elt.offsetWidth - bounds.width) / 2 - 14;
					off.y = elt.parentNode.offsetHeight - 2;
				}
				else
				{
					off.x = elt.parentNode.offsetLeft + elt.parentNode.offsetWidth + 2;
					off.y += (elt.offsetHeight - bounds.height) / 2;
				}
				
				return new mxPoint(Math.max(0, off.x), Math.max(0, off.y));
			}
			else if (this.editorUi.sidebarWindow != null)
			{
				var off = mxUtils.getOffset(this.editorUi.sidebarWindow.window.div);

				off.x += this.editorUi.sidebarWindow.window.div.offsetWidth + 2;
				off.y += elt.offsetTop + (elt.offsetHeight - bounds.height) / 2;

				if (elt.offsetParent != null)
				{
					off.y -= elt.offsetParent.scrollTop;
				}
				
				return new mxPoint(Math.max(0, off.x), Math.max(0, off.y));
			}
		}
		
		return sidebarGetTooltipOffset.apply(this, arguments);
	};
    
	/**
	 * Adds a click handler for inserting the cell as target for dangling edge.
	 */
	var sidebarItemClicked = Sidebar.prototype.itemClicked;
	
	Sidebar.prototype.itemClicked = function(cells, ds, evt)
	{
		var graph = this.editorUi.editor.graph;
		var handled = false;
		
		if (cells != null && graph.getSelectionCount() == 1 && graph.getModel().isVertex(cells[0]))
		{
			var target = graph.cloneCell(cells[0]);
			
			// Inserts cell as target of selected edge if not connected
			if (graph.getModel().isEdge(graph.getSelectionCell()) && graph.getModel().getTerminal(graph.getSelectionCell(), false) == null &&
				graph.getModel().isVertex(target))
			{
				graph.getModel().beginUpdate();
				try
				{
					var edgeState = graph.view.getState(graph.getSelectionCell());
					
					if (edgeState != null)
					{
						var tr = graph.view.translate;
						var s = graph.view.scale;
						var pt = edgeState.absolutePoints[edgeState.absolutePoints.length - 1];

						target.geometry.x = pt.x / s - tr.x - target.geometry.width / 2;
						target.geometry.y = pt.y / s - tr.y - target.geometry.height / 2;
					}
					
					graph.addCell(target);
					graph.getModel().setTerminal(graph.getSelectionCell(), target, false);
					
					if (evt == null || !mxEvent.isShiftDown(evt))
					{
						graph.fireEvent(new mxEventObject('cellsInserted', 'cells', [target]));
					}
				}
				catch (e)
				{
					this.editorUi.handleError(e);
				}
				finally
				{
					graph.getModel().endUpdate();
				}
				
				graph.scrollCellToVisible(target);
				graph.setSelectionCell(target);
				handled = true;
			}
		}
		
		if (!handled)
		{
			sidebarItemClicked.apply(this, arguments);
		}
	};
})();