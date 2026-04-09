
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Video, 
  FileText, 
  Image as ImageIcon, 
  Play, 
  Download, 
  ExternalLink,
  Search,
  BookOpen,
  MessageSquare,
  Award,
  Eye,
  X,
  ChevronDown,
  ChevronUp,
  Sparkles
} from 'lucide-react';
import { Language } from '../types';

interface InterviewProps {
  translations: any;
  lang: Language;
}

type Tab = 'videos' | 'notes' | 'photos';

const Interview: React.FC<InterviewProps> = ({ translations, lang }) => {
  const [activeTab, setActiveTab] = useState<Tab>('videos');
  const [selectedNote, setSelectedNote] = useState<any | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<any | null>(null);
  const isHi = lang === 'hi';

  const smtQuestions = [
    { q: "What is SMT?", a: "Surface Mount Technology — components are mounted directly on PCB." },
    { q: "What is SMT line flow?", a: "Loader → Printer → SPI → Pick & Place → Reflow → AOI → Unloader" },
    { q: "What is solder paste?", a: "Mixture of flux and solder powder." },
    { q: "What is stencil?", a: "Metal sheet used to print solder paste." },
    { q: "What is solder printing?", a: "Applying solder paste on PCB pads." },
    { q: "What is SPI?", a: "Solder Paste Inspection machine." },
    { q: "What does SPI check?", a: "Paste height, volume, alignment." },
    { q: "What is pick and place machine?", a: "Machine that places components on PCB." },
    { q: "What is feeder?", a: "Device that holds components." },
    { q: "What is nozzle?", a: "Tool used to pick components." },
    { q: "What is reflow oven?", a: "Oven used to melt solder paste." },
    { q: "What are reflow zones?", a: "Preheat, soak, reflow, cooling." },
    { q: "What is AOI?", a: "Automatic Optical Inspection." },
    { q: "What does AOI detect?", a: "Missing, polarity, shift, bridge." },
    { q: "What is tombstone defect?", a: "Component stands on one side." },
    { q: "What is solder bridge?", a: "Short between two pads." },
    { q: "What is cold solder joint?", a: "Weak solder connection." },
    { q: "What is component shift?", a: "Component moved from position." },
    { q: "What is skew?", a: "Component rotated at angle." },
    { q: "What is solder ball?", a: "Small solder particles." },
    { q: "What is flux?", a: "Chemical used for soldering." },
    { q: "What is BGA?", a: "Ball Grid Array package." },
    { q: "What is QFN?", a: "Quad Flat No Lead." },
    { q: "What is SOP?", a: "Small Outline Package." },
    { q: "What is fiducial mark?", a: "PCB alignment mark." },
    { q: "What is global fiducial?", a: "Board alignment mark." },
    { q: "What is local fiducial?", a: "Component alignment mark." },
    { q: "What is MSL?", a: "Moisture Sensitivity Level." },
    { q: "Why baking is required?", a: "To remove moisture." },
    { q: "What is PCB warpage?", a: "PCB bending." },
    { q: "What is panel PCB?", a: "Multiple PCBs in one panel." },
    { q: "What is depaneling?", a: "Separating PCB from panel." },
    { q: "What is solder paste life?", a: "Typically 4–8 hours at room temperature." },
    { q: "What is stencil cleaning?", a: "Cleaning stencil during printing." },
    { q: "What is under print?", a: "Less solder paste printed." },
    { q: "What is over print?", a: "Excess solder paste printed." },
    { q: "What is misalignment?", a: "Paste shifted from pad." },
    { q: "What causes solder bridging?", a: "Too much solder paste." },
    { q: "What causes insufficient solder?", a: "Low paste volume." },
    { q: "What causes tombstoning?", a: "Uneven heating or paste imbalance." },
    { q: "What causes component missing?", a: "Empty feeder or pick failure." },
    { q: "What causes wrong component?", a: "Wrong feeder setup." },
    { q: "What is pick error?", a: "Component not picked." },
    { q: "What is place error?", a: "Component placed incorrectly." },
    { q: "What is vacuum pressure?", a: "Pressure used to pick component." },
    { q: "What is feeder calibration?", a: "Setting correct pitch." },
    { q: "What is pitch?", a: "Distance between components." },
    { q: "What is reel?", a: "Component tape roll." },
    { q: "What is tape and reel?", a: "Component packaging type." },
    { q: "What is tray component?", a: "Components packed in tray." },
    { q: "What is stick component?", a: "Tube packaging components." },
    { q: "What is machine program?", a: "Placement data file." },
    { q: "What is centroid file?", a: "Component location file." },
    { q: "What is Gerber file?", a: "PCB design manufacturing file." },
    { q: "What is component library?", a: "Component data database." },
    { q: "What is offset?", a: "Position correction." },
    { q: "What is X-Y correction?", a: "Position adjustment." },
    { q: "What is theta correction?", a: "Angle adjustment." },
    { q: "What is Z height?", a: "Placement height." },
    { q: "What is conveyor speed?", a: "PCB movement speed." },
    { q: "What is board clamp?", a: "PCB holding mechanism." },
    { q: "What is support pin?", a: "PCB support during printing." },
    { q: "What is nozzle cleaning?", a: "Cleaning pickup nozzle." },
    { q: "What is machine downtime?", a: "Machine stopped time." },
    { q: "What is changeover?", a: "Model change process." },
    { q: "What is setup time?", a: "Line preparation time." },
    { q: "What is line balancing?", a: "Equalizing station time." },
    { q: "What is SPI fail action?", a: "Adjust printer parameters." },
    { q: "What is AOI fail action?", a: "Send for rework." },
    { q: "What is reflow defect action?", a: "Adjust temperature profile." },
    { q: "What is reflow profile?", a: "Temperature vs time graph for soldering." },
    { q: "What is peak temperature?", a: "Maximum temperature in reflow." },
    { q: "What is soak zone?", a: "Temperature stabilization zone." },
    { q: "What is cooling zone?", a: "Cooling stage after soldering." },
    { q: "What is ESD?", a: "Electrostatic Discharge." },
    { q: "How to control ESD?", a: "Using wrist strap, ESD mat, grounding." },
    { q: "What is first pass yield?", a: "Units passed without rework." },
    { q: "How to calculate yield?", a: "OK output / total input ×100" },
    { q: "What is rework?", a: "Repairing defective PCB." },
    { q: "What is touch up?", a: "Minor manual correction." },
    { q: "What is solder ball defect?", a: "Small solder particles near pads." },
    { q: "What causes solder balls?", a: "Excess paste or high temperature." },
    { q: "What is voiding?", a: "Air gap in solder joint." },
    { q: "What is head-in-pillow defect?", a: "BGA ball not properly joined." },
    { q: "What is non-wetting?", a: "Solder does not spread." },
    { q: "What is de-wetting?", a: "Solder pulls away from pad." },
    { q: "What is lifted lead?", a: "Component lead not soldered." },
    { q: "What is bridging in SMT?", a: "Short between two pads." },
    { q: "What is insufficient solder?", a: "Low solder joint." },
    { q: "What is excessive solder?", a: "Too much solder." },
    { q: "What is component polarity?", a: "Direction marking of component." },
    { q: "How to check polarity?", a: "Using marking or datasheet." },
    { q: "What is feeder setup?", a: "Loading components in feeder." },
    { q: "What is dry solder?", a: "Poor solder wetting." },
    { q: "What is SMT critical process?", a: "Solder paste printing." },
    { q: "What is stencil thickness?", a: "Thickness of stencil sheet." },
    { q: "What is aperture?", a: "Opening in stencil." },
    { q: "What is print pressure?", a: "Pressure applied by squeegee." },
    { q: "What is separation speed?", a: "Speed of stencil separation." },
    { q: "What is SMT production engineer role?", a: "Manage line, quality, and output." }
  ];

  const miDipQuestions = [
    { q: "What is MI?", a: "Manual Insertion of through-hole components." },
    { q: "What is DIP?", a: "Dual In-line Package insertion process." },
    { q: "What is through-hole component?", a: "Component leads inserted into PCB holes." },
    { q: "MI line flow?", a: "Insertion → Inspection → Soldering → Cleaning → QC" },
    { q: "What is wave soldering?", a: "Automatic soldering using molten solder wave." },
    { q: "What is selective soldering?", a: "Soldering selected components only." },
    { q: "What is hand soldering?", a: "Manual soldering using soldering iron." },
    { q: "What is soldering iron temperature?", a: "Typically 350°C to 380°C" },
    { q: "What is flux?", a: "Chemical used for better soldering." },
    { q: "What is solder wire?", a: "Wire used for manual soldering." },
    { q: "What is lead-free solder?", a: "Solder without lead." },
    { q: "What is leaded solder?", a: "Solder containing lead." },
    { q: "What is DIP component?", a: "Dual inline package IC." },
    { q: "What is resistor insertion?", a: "Manual placement of resistor." },
    { q: "What is polarity component?", a: "Component with direction." },
    { q: "Examples of polarity components?", a: "Diode, capacitor, IC" },
    { q: "What is wrong insertion?", a: "Component inserted incorrectly." },
    { q: "What is missing component?", a: "Component not inserted." },
    { q: "What is bent lead?", a: "Component lead bent." },
    { q: "What is lifted lead?", a: "Lead not soldered." },
    { q: "What is cold solder?", a: "Weak solder joint." },
    { q: "What is dry solder?", a: "Poor solder wetting." },
    { q: "What is solder bridge?", a: "Short between two pins." },
    { q: "What is excessive solder?", a: "Too much solder." },
    { q: "What is insufficient solder?", a: "Less solder." },
    { q: "What is trimming?", a: "Cutting component leads." },
    { q: "What is clinching?", a: "Bending leads after insertion." },
    { q: "What is preheating?", a: "Heating PCB before soldering." },
    { q: "Why preheating required?", a: "To avoid thermal shock." },
    { q: "What is wave height?", a: "Height of solder wave." },
    { q: "What is conveyor speed?", a: "PCB movement speed." },
    { q: "What is solder pot?", a: "Molten solder tank." },
    { q: "What is fluxer?", a: "Applies flux before soldering." },
    { q: "What is solder dross?", a: "Oxidized solder waste." },
    { q: "What is solder mask?", a: "PCB protective layer." },
    { q: "What is pad?", a: "Copper area for soldering." },
    { q: "What is through-hole plating?", a: "Copper plated hole." },
    { q: "What is soldering defect?", a: "Improper solder joint." },
    { q: "What is inspection?", a: "Checking solder quality." },
    { q: "What is MI operator role?", a: "Insert components correctly." },
    { q: "What is wave solder machine?", a: "Machine used for automatic through-hole soldering." },
    { q: "What are wave solder zones?", a: "Fluxing, preheating, solder wave, cooling." },
    { q: "What is flux density?", a: "Thickness of applied flux." },
    { q: "What is solder temperature in wave?", a: "Typically 250°C to 260°C." },
    { q: "What is dwell time?", a: "Time PCB stays in solder wave." },
    { q: "What is solder bridging in MI?", a: "Short between adjacent leads." },
    { q: "What causes solder bridging?", a: "Low conveyor speed or excess solder." },
    { q: "What is icicle defect?", a: "Sharp solder projection." },
    { q: "What is blow hole?", a: "Hole in solder joint." },
    { q: "What is pin hole?", a: "Small hole in solder." },
    { q: "What is non-wetting?", a: "Solder not sticking to pad." },
    { q: "What is de-wetting?", a: "Solder pulls away from surface." },
    { q: "What is solder skip?", a: "Pad not soldered." },
    { q: "What is lifted pad?", a: "Pad detached from PCB." },
    { q: "What is component polarity?", a: "Correct direction of component." },
    { q: "How to identify polarity?", a: "Marking, band, or datasheet." },
    { q: "What is electrolytic capacitor polarity?", a: "Long lead positive." },
    { q: "What is diode polarity?", a: "Band indicates cathode." },
    { q: "What is IC polarity?", a: "Pin 1 marking." },
    { q: "What is lead trimming?", a: "Cutting extra leads." },
    { q: "What is manual trimming?", a: "Hand cutting leads." },
    { q: "What is auto cutter?", a: "Automatic lead cutting machine." },
    { q: "What is soldering quality check?", a: "Visual inspection." },
    { q: "What is IPC standard?", a: "Soldering quality standard." },
    { q: "What is IPC-A-610?", a: "Acceptability standard for PCB." },
    { q: "What is good solder joint?", a: "Smooth, shiny, cone shape." },
    { q: "What is dull solder?", a: "Cold solder joint." },
    { q: "What is insufficient solder?", a: "Less solder joint." },
    { q: "What is excessive solder?", a: "Too much solder." },
    { q: "What is component damage?", a: "Overheating damage." },
    { q: "What is PCB burning?", a: "Overheating PCB." },
    { q: "What is solder splash?", a: "Solder scattered." },
    { q: "What is flux residue?", a: "Remaining flux after soldering." },
    { q: "What is cleaning process?", a: "Removing flux residue." },
    { q: "What is IPA cleaning?", a: "Isopropyl alcohol cleaning." },
    { q: "What is conformal coating?", a: "Protective coating on PCB." },
    { q: "What is inspection lamp?", a: "Light used for inspection." },
    { q: "What is magnifier?", a: "Zoom inspection tool." },
    { q: "What is QC check?", a: "Quality control inspection." },
    { q: "What is rejection?", a: "Defective PCB." },
    { q: "What is rework?", a: "Repairing defect." },
    { q: "What is touch up?", a: "Minor solder correction." },
    { q: "What is solder wick?", a: "Removing excess solder." },
    { q: "What is desoldering pump?", a: "Removing solder tool." },
    { q: "What is tip cleaning?", a: "Cleaning soldering tip." },
    { q: "What is tip tinner?", a: "Tip maintenance chemical." },
    { q: "What is soldering iron tip?", a: "End of soldering iron." },
    { q: "What is grounding?", a: "ESD protection." },
    { q: "What is ESD safe workstation?", a: "Anti-static workstation." },
    { q: "What is work instruction?", a: "Process guideline." },
    { q: "What is SOP?", a: "Standard operating procedure." },
    { q: "What is WI?", a: "Work instruction." },
    { q: "What is process flow?", a: "Step-by-step production." },
    { q: "What is FIFO?", a: "First in first out." },
    { q: "What is traceability?", a: "Tracking product history." },
    { q: "What is batch number?", a: "Production lot number." },
    { q: "What is line balancing?", a: "Equal workload." },
    { q: "What is cycle time?", a: "Time per PCB." },
    { q: "What is takt time?", a: "Customer demand time." },
    { q: "What is MI production engineer role?", a: "Manage insertion, soldering, quality." }
  ];

  const fatpQuestions = [
    { q: "What is FATP?", a: "Final Assembly, Test and Pack." },
    { q: "FATP line flow?", a: "Assembly → Testing → Inspection → Packing" },
    { q: "What is functional testing?", a: "Testing product working condition." },
    { q: "What is ICT testing?", a: "In-Circuit Test of PCB." },
    { q: "What is FCT?", a: "Functional Circuit Test." },
    { q: "What is burn-in testing?", a: "Long time running test." },
    { q: "What is aging test?", a: "Continuous operation test." },
    { q: "What is EOL testing?", a: "End of line testing." },
    { q: "What is jig?", a: "Fixture used for testing." },
    { q: "What is fixture?", a: "Holding device for PCB." },
    { q: "What is pass?", a: "Product working OK." },
    { q: "What is fail?", a: "Product not working." },
    { q: "What is retest?", a: "Testing again." },
    { q: "What is debugging?", a: "Finding fault." },
    { q: "What is flashing?", a: "Loading software." },
    { q: "What is firmware?", a: "Embedded software." },
    { q: "What is booting?", a: "Device starting." },
    { q: "What is no booting?", a: "Device not starting." },
    { q: "What is no power?", a: "Device not turning on." },
    { q: "What is LED test?", a: "Checking LED function." },
    { q: "What is display test?", a: "Checking screen output." },
    { q: "What is IR test?", a: "Remote control test." },
    { q: "What is USB test?", a: "USB function test." },
    { q: "What is HDMI test?", a: "HDMI output test." },
    { q: "What is audio test?", a: "Sound test." },
    { q: "What is video test?", a: "Display video test." },
    { q: "What is network test?", a: "LAN/WIFI test." },
    { q: "What is MAC address?", a: "Device network address." },
    { q: "What is serial number?", a: "Unique device number." },
    { q: "What is barcode?", a: "Product identification code." },
    { q: "What is scan test?", a: "Barcode scanning." },
    { q: "What is software version?", a: "Firmware version." },
    { q: "What is update?", a: "Software upgrade." },
    { q: "What is downgrade?", a: "Software lower version." },
    { q: "What is calibration?", a: "Adjustment for accuracy." },
    { q: "What is limit testing?", a: "Pass/fail threshold." },
    { q: "What is data logging?", a: "Test data recording." },
    { q: "What is yield?", a: "Pass percentage." },
    { q: "What is FPY?", a: "First pass yield." },
    { q: "What is rework?", a: "Repair failed unit." },
    { q: "What is packing?", a: "Product packaging." },
    { q: "What is visual inspection?", a: "Checking appearance." },
    { q: "What is accessory check?", a: "Checking items." },
    { q: "What is label?", a: "Product sticker." },
    { q: "What is carton packing?", a: "Box packing." },
    { q: "What is inner packing?", a: "Small box packing." },
    { q: "What is outer packing?", a: "Master carton packing." },
    { q: "What is drop test?", a: "Packaging strength test." },
    { q: "What is QA check?", a: "Quality assurance." },
    { q: "What is FATP engineer role?", a: "Assembly, testing, packing control." },
    { q: "What is golden sample?", a: "Reference approved unit." },
    { q: "What is master sample?", a: "Standard comparison unit." },
    { q: "What is failure analysis?", a: "Finding root cause of failure." },
    { q: "What is troubleshooting?", a: "Diagnosing problem." },
    { q: "What is no display issue?", a: "Screen not showing output." },
    { q: "What is no audio issue?", a: "No sound output." },
    { q: "What is no video issue?", a: "No picture output." },
    { q: "What is remote not working?", a: "IR failure." },
    { q: "What is LED not glowing?", a: "Power or LED fault." },
    { q: "What is hanging issue?", a: "Device stuck." },
    { q: "What is reboot issue?", a: "Device restarting automatically." },
    { q: "What is heating issue?", a: "Device temperature high." },
    { q: "What is software crash?", a: "Firmware stops working." },
    { q: "What is hardware failure?", a: "Component fault." },
    { q: "What is test limit?", a: "Pass/fail range." },
    { q: "What is boundary testing?", a: "Testing upper/lower limits." },
    { q: "What is load test?", a: "Testing under load." },
    { q: "What is stress test?", a: "Testing extreme condition." },
    { q: "What is voltage test?", a: "Power voltage check." },
    { q: "What is current test?", a: "Current measurement." },
    { q: "What is continuity test?", a: "Circuit connection test." },
    { q: "What is short test?", a: "Short circuit detection." },
    { q: "What is open test?", a: "Open circuit detection." },
    { q: "What is grounding test?", a: "Ground connection test." },
    { q: "What is leakage test?", a: "Current leakage check." },
    { q: "What is insulation test?", a: "Isolation check." },
    { q: "What is polarity test?", a: "Direction verification." },
    { q: "What is connector test?", a: "Connector functionality check." },
    { q: "What is button test?", a: "Key function test." },
    { q: "What is keypad test?", a: "Key press verification." },
    { q: "What is display color test?", a: "Color check." },
    { q: "What is brightness test?", a: "Display brightness check." },
    { q: "What is WiFi test?", a: "Wireless connectivity test." },
    { q: "What is Bluetooth test?", a: "Bluetooth connectivity check." },
    { q: "What is LAN test?", a: "Ethernet connection test." },
    { q: "What is USB detection?", a: "USB recognition test." },
    { q: "What is SD card test?", a: "Memory card test." },
    { q: "What is memory test?", a: "RAM check." },
    { q: "What is storage test?", a: "Flash memory check." },
    { q: "What is RTC test?", a: "Real time clock test." },
    { q: "What is reset test?", a: "Reset function check." },
    { q: "What is standby test?", a: "Sleep mode test." },
    { q: "What is power consumption test?", a: "Power usage measurement." },
    { q: "What is burn-in duration?", a: "Long running test time." },
    { q: "What is aging rack?", a: "Burn-in testing rack." },
    { q: "What is OK tag?", a: "Passed unit label." },
    { q: "What is reject tag?", a: "Failed unit label." },
    { q: "What is packing checklist?", a: "Items verification list." },
    { q: "What is shipment inspection?", a: "Final check before dispatch." },
    { q: "What is FATP production engineer role?", a: "Manage assembly, testing, yield, packing." }
  ];

  const hrQuestions = [
    { q: "Tell me about yourself.", a: "I am working as Production Engineer in electronics manufacturing handling SMT, MI, and FATP lines." },
    { q: "What is your experience in production?", a: "I have experience in line handling, manpower, quality and output." },
    { q: "What is your strength?", a: "Problem solving and line management." },
    { q: "What is your weakness?", a: "I focus too much on work sometimes." },
    { q: "Why do you want to change job?", a: "Career growth and learning opportunities." },
    { q: "What is production planning?", a: "Planning manpower and material." },
    { q: "What is line balancing?", a: "Equal work distribution." },
    { q: "What is cycle time?", a: "Time to produce one unit." },
    { q: "What is takt time?", a: "Customer demand time." },
    { q: "What is productivity?", a: "Output per manpower." },
    { q: "How do you reduce rejection?", a: "Root cause analysis and process control." },
    { q: "How do you improve yield?", a: "Process improvement and training." },
    { q: "How do you handle line stop?", a: "Identify problem and restart." },
    { q: "What is WIP?", a: "Work in progress." },
    { q: "What is FIFO?", a: "First in first out." },
    { q: "What is 5S?", a: "Sort, Set, Shine, Standardize, Sustain." },
    { q: "What is Kaizen?", a: "Continuous improvement." },
    { q: "What is Lean manufacturing?", a: "Waste reduction." },
    { q: "What is OEE?", a: "Overall equipment effectiveness." },
    { q: "OEE formula?", a: "Availability × Performance × Quality" },
    { q: "What is downtime?", a: "Machine stop time." },
    { q: "What is bottleneck?", a: "Slowest process." },
    { q: "What is manpower planning?", a: "Manpower as per target." },
    { q: "What is CAPA?", a: "Corrective and preventive action." },
    { q: "What is root cause analysis?", a: "Finding main reason." },
    { q: "What is 5 Why?", a: "Root cause tool." },
    { q: "What is fishbone diagram?", a: "Cause analysis tool." },
    { q: "What is Poka Yoke?", a: "Mistake proofing." },
    { q: "What is Andon?", a: "Line alert system." },
    { q: "What is production target?", a: "Required output." },
    { q: "What is rejection?", a: "Defective units." },
    { q: "What is rework?", a: "Repairing defects." },
    { q: "What is scrap?", a: "Non-repairable defect." },
    { q: "What is quality control?", a: "Checking product quality." },
    { q: "What is audit?", a: "Process checking." },
    { q: "What is SOP?", a: "Standard operating procedure." },
    { q: "What is WI?", a: "Work instruction." },
    { q: "What is escalation?", a: "Inform higher authority." },
    { q: "How do you handle pressure?", a: "Prioritize work and manage team." },
    { q: "How do you handle team?", a: "Proper communication and support." },
    { q: "How do you improve efficiency?", a: "Reduce waste and balance line." },
    { q: "What is daily production report?", a: "Output and issue report." },
    { q: "What is hourly monitoring?", a: "Output tracking hourly." },
    { q: "What is defect analysis?", a: "Defect tracking." },
    { q: "What is Pareto analysis?", a: "Top defect identification." },
    { q: "What is KPI?", a: "Key performance indicator." },
    { q: "What is delivery target?", a: "Dispatch requirement." },
    { q: "What is material shortage?", a: "Material not available." },
    { q: "What is escalation matrix?", a: "Issue reporting level." },
    { q: "Why should we hire you?", a: "I can improve productivity and quality." },
    { q: "What motivates you?", a: "Learning new skills and achieving targets." },
    { q: "Are you comfortable working in shifts?", a: "Yes, I am flexible with shifts." },
    { q: "Can you handle team pressure?", a: "Yes, I manage work with planning." },
    { q: "What is your leadership style?", a: "Supportive and result oriented." },
    { q: "How do you handle conflict?", a: "Discuss and resolve professionally." },
    { q: "What is your current role?", a: "Handling production line and quality." },
    { q: "What is your current CTC?", a: "(Answer as per your salary)" },
    { q: "What is your expected salary?", a: "As per company standards and experience." },
    { q: "Are you ready to relocate?", a: "Yes." },
    { q: "Are you comfortable with overtime?", a: "Yes, if production requires." },
    { q: "How do you manage manpower shortage?", a: "Adjust line and cross-train operators." },
    { q: "What is your biggest achievement?", a: "Improved production and reduced rejection." },
    { q: "What is your biggest challenge?", a: "Handling high rejection." },
    { q: "How do you improve productivity?", a: "Line balancing and process improvement." },
    { q: "How do you reduce downtime?", a: "Preventive maintenance and quick action." },
    { q: "What is your notice period?", a: "(Answer as per job)" },
    { q: "Why should we hire you?", a: "I improve output and quality." },
    { q: "How do you handle mistakes?", a: "Analyze and correct immediately." },
    { q: "How do you handle rejection increase?", a: "Root cause and corrective action." },
    { q: "What is team management?", a: "Handling manpower effectively." },
    { q: "What is daily target?", a: "Required daily production." },
    { q: "What is hourly target?", a: "Output per hour." },
    { q: "What is escalation?", a: "Inform higher authority." },
    { q: "What is productivity improvement?", a: "More output with same manpower." },
    { q: "What is multitasking?", a: "Handling multiple work." },
    { q: "How do you monitor line?", a: "Hourly output tracking." },
    { q: "What is communication skill?", a: "Clear discussion with team." },
    { q: "What is decision making?", a: "Taking quick action." },
    { q: "What is problem solving?", a: "Finding and fixing issues." },
    { q: "What is time management?", a: "Planning work efficiently." },
    { q: "What is discipline in production?", a: "Following process rules." },
    { q: "What is attendance control?", a: "Managing operator presence." },
    { q: "What is shift handover?", a: "Transfer work to next shift." },
    { q: "What is production meeting?", a: "Daily planning discussion." },
    { q: "What is rejection control?", a: "Reduce defect rate." },
    { q: "What is quality improvement?", a: "Better process control." },
    { q: "What is customer focus?", a: "Meeting customer requirements." },
    { q: "What is teamwork?", a: "Working together." },
    { q: "What is responsibility?", a: "Ownership of work." },
    { q: "What is accountability?", a: "Answerable for result." },
    { q: "What is planning?", a: "Work preparation." },
    { q: "What is execution?", a: "Implement planning." },
    { q: "What is monitoring?", a: "Tracking progress." },
    { q: "What is reporting?", a: "Sharing data." },
    { q: "What is improvement?", a: "Better process." },
    { q: "What is production loss?", a: "Output decrease." },
    { q: "What is absenteeism?", a: "Operator absent." },
    { q: "What is operator training?", a: "Skill development." },
    { q: "What is safety?", a: "Following safety rules." },
    { q: "What is production engineer responsibility?", a: "Production, quality, manpower, output control." }
  ];

  const qualityQuestions = [
    { q: "What is quality?", a: "Meeting customer requirements." },
    { q: "What is quality control?", a: "Checking product quality." },
    { q: "What is quality assurance?", a: "Preventing defects." },
    { q: "QC vs QA?", a: "QC detects defects, QA prevents defects." },
    { q: "What is defect?", a: "Non-conformance to requirement." },
    { q: "What is rejection?", a: "Defective product." },
    { q: "What is rework?", a: "Repairing defect." },
    { q: "What is scrap?", a: "Non-repairable defect." },
    { q: "What is inspection?", a: "Checking product." },
    { q: "What is incoming inspection?", a: "Material checking before production." },
    { q: "What is in-process inspection?", a: "Checking during production." },
    { q: "What is final inspection?", a: "Checking before dispatch." },
    { q: "What is AQL?", a: "Acceptable Quality Level." },
    { q: "What is sampling?", a: "Checking some quantity." },
    { q: "What is 100% inspection?", a: "Checking all units." },
    { q: "What is visual inspection?", a: "Checking visually." },
    { q: "What is dimensional inspection?", a: "Measuring size." },
    { q: "What is functional test?", a: "Working test." },
    { q: "What is SOP?", a: "Standard operating procedure." },
    { q: "What is WI?", a: "Work instruction." },
    { q: "What is control plan?", a: "Quality control steps." },
    { q: "What is defect rate?", a: "Defect percentage." },
    { q: "What is PPM?", a: "Parts per million defects." },
    { q: "PPM formula?", a: "Defect/total × 1,000,000" },
    { q: "What is yield?", a: "OK/total ×100" },
    { q: "What is FPY?", a: "First pass yield." },
    { q: "What is OQC?", a: "Outgoing quality control." },
    { q: "What is IQC?", a: "Incoming quality control." },
    { q: "What is IPQC?", a: "In process quality control." },
    { q: "What is CAR?", a: "Corrective action request." },
    { q: "What is CAPA?", a: "Corrective and preventive action." },
    { q: "What is NCR?", a: "Non-conformance report." },
    { q: "What is deviation?", a: "Temporary change approval." },
    { q: "What is concession?", a: "Accepting defect temporarily." },
    { q: "What is traceability?", a: "Tracking product history." },
    { q: "What is batch number?", a: "Production lot." },
    { q: "What is root cause?", a: "Main reason of problem." },
    { q: "What is 5 Why?", a: "Root cause analysis." },
    { q: "What is fishbone diagram?", a: "Cause-effect diagram." },
    { q: "What is Pareto chart?", a: "Top defects analysis." },
    { q: "What is histogram?", a: "Data distribution chart." },
    { q: "What is check sheet?", a: "Data collection format." },
    { q: "What is control chart?", a: "Process monitoring chart." },
    { q: "What is Cp?", a: "Process capability." },
    { q: "What is Cpk?", a: "Process performance." },
    { q: "What is specification limit?", a: "Allowed range." },
    { q: "What is tolerance?", a: "Allowed variation." },
    { q: "What is calibration?", a: "Accuracy adjustment." },
    { q: "What is gauge?", a: "Measurement tool." },
    { q: "What is quality engineer role?", a: "Ensure product meets standards." },
    { q: "What is SMT quality?", a: "Quality control in SMT process." },
    { q: "What is solder paste inspection?", a: "Checking paste printing quality." },
    { q: "What does SPI check?", a: "Height, volume, alignment." },
    { q: "What is AOI inspection?", a: "Automatic visual inspection." },
    { q: "What defects AOI detect?", a: "Missing, shift, polarity, bridge." },
    { q: "What is solder bridge?", a: "Short between pads." },
    { q: "What is tombstone?", a: "Component lifted on one side." },
    { q: "What is component shift?", a: "Component moved from position." },
    { q: "What is skew defect?", a: "Component rotated." },
    { q: "What is insufficient solder?", a: "Low solder joint." },
    { q: "What is excessive solder?", a: "Too much solder." },
    { q: "What is solder ball?", a: "Small solder particles." },
    { q: "What is cold solder?", a: "Weak joint." },
    { q: "What is dry solder?", a: "Poor wetting." },
    { q: "What is lifted lead?", a: "Pin not soldered." },
    { q: "What is open solder?", a: "No connection." },
    { q: "What is short defect?", a: "Electrical short." },
    { q: "What is polarity defect?", a: "Wrong direction component." },
    { q: "What is missing component?", a: "Component not placed." },
    { q: "What is wrong component?", a: "Incorrect value component." },
    { q: "What is reversed polarity?", a: "Component opposite direction." },
    { q: "What is BGA defect?", a: "Ball solder issue." },
    { q: "What is voiding?", a: "Air gap in solder." },
    { q: "What is head-in-pillow?", a: "BGA connection failure." },
    { q: "What is non-wetting?", a: "Solder not sticking." },
    { q: "What is de-wetting?", a: "Solder pulling away." },
    { q: "What is solder beading?", a: "Small solder beads." },
    { q: "What is bridging cause?", a: "Excess paste." },
    { q: "What is tombstone cause?", a: "Uneven heating." },
    { q: "What is shift cause?", a: "Placement error." },
    { q: "What is SPI fail action?", a: "Adjust printer." },
    { q: "What is AOI fail action?", a: "Send rework." },
    { q: "What is reflow profile?", a: "Temperature curve." },
    { q: "What is peak temperature?", a: "Maximum reflow temp." },
    { q: "What is soak zone?", a: "Stabilization zone." },
    { q: "What is cooling zone?", a: "Cooling stage." },
    { q: "What is stencil thickness?", a: "Stencil sheet thickness." },
    { q: "What is aperture?", a: "Opening in stencil." },
    { q: "What is fiducial?", a: "Alignment mark." },
    { q: "What is global fiducial?", a: "Board alignment." },
    { q: "What is local fiducial?", a: "Component alignment." },
    { q: "What is paste volume?", a: "Printed paste amount." },
    { q: "What is paste height?", a: "Paste thickness." },
    { q: "What is paste offset?", a: "Paste shift." },
    { q: "What is printing defect?", a: "Poor paste print." },
    { q: "What is placement defect?", a: "Wrong placement." },
    { q: "What is reflow defect?", a: "Soldering defect." },
    { q: "What is SMT yield?", a: "Pass percentage." },
    { q: "What is SMT quality control?", a: "SPI + AOI + inspection." },
    { q: "What is SMT quality engineer role?", a: "Monitor defects and improve process." },
    { q: "What is MI quality?", a: "Quality control in manual insertion process." },
    { q: "What is wrong insertion?", a: "Component inserted incorrectly." },
    { q: "What is missing component?", a: "Component not inserted." },
    { q: "What is polarity defect?", a: "Component inserted reverse." },
    { q: "What is bent lead?", a: "Component lead bent." },
    { q: "What is lifted lead?", a: "Lead not soldered." },
    { q: "What is cold solder?", a: "Weak solder joint." },
    { q: "What is dry solder?", a: "Poor wetting." },
    { q: "What is excessive solder?", a: "Too much solder." },
    { q: "What is insufficient solder?", a: "Less solder." },
    { q: "What is solder bridge?", a: "Short between leads." },
    { q: "What is solder icicle?", a: "Sharp solder spike." },
    { q: "What is blow hole?", a: "Hole in solder joint." },
    { q: "What is pin hole?", a: "Small hole in solder." },
    { q: "What is non-wetting?", a: "Solder not sticking." },
    { q: "What is de-wetting?", a: "Solder pulling away." },
    { q: "What is solder skip?", a: "Pad not soldered." },
    { q: "What is lifted pad?", a: "Pad damaged." },
    { q: "What is trimming defect?", a: "Lead not cut properly." },
    { q: "What is clinching defect?", a: "Lead not bent properly." },
    { q: "What is wave soldering quality?", a: "Quality after wave solder." },
    { q: "What is flux issue?", a: "Improper flux application." },
    { q: "What is solder temperature issue?", a: "High or low solder temp." },
    { q: "What is conveyor speed issue?", a: "Too fast or slow." },
    { q: "What is preheat issue?", a: "Improper heating." },
    { q: "What is FATP quality?", a: "Final assembly quality check." },
    { q: "What is no power issue?", a: "Device not turning on." },
    { q: "What is no display issue?", a: "Screen not showing." },
    { q: "What is no audio issue?", a: "No sound." },
    { q: "What is no video issue?", a: "No picture." },
    { q: "What is remote failure?", a: "IR not working." },
    { q: "What is USB fail?", a: "USB not detecting." },
    { q: "What is HDMI fail?", a: "No HDMI output." },
    { q: "What is network fail?", a: "LAN/WIFI not working." },
    { q: "What is booting issue?", a: "Device not starting." },
    { q: "What is hang issue?", a: "Device stuck." },
    { q: "What is reboot issue?", a: "Auto restart." },
    { q: "What is heating issue?", a: "High temperature." },
    { q: "What is LED fail?", a: "LED not glowing." },
    { q: "What is button fail?", a: "Key not working." },
    { q: "What is display defect?", a: "Screen issue." },
    { q: "What is functional fail?", a: "Device not working." },
    { q: "What is accessory missing?", a: "Item missing in box." },
    { q: "What is label defect?", a: "Wrong label." },
    { q: "What is cosmetic defect?", a: "Scratch or dent." },
    { q: "What is packing defect?", a: "Wrong packing." },
    { q: "What is drop test fail?", a: "Package damage." },
    { q: "What is FATP yield?", a: "Pass percentage." },
    { q: "What is retest?", a: "Test again." },
    { q: "What is MI/FATP quality engineer role?", a: "Monitor defects and improve quality." },
    { q: "What is audit?", a: "Checking process compliance." },
    { q: "Types of audit?", a: "Internal, external, customer." },
    { q: "What is internal audit?", a: "Company internal check." },
    { q: "What is customer audit?", a: "Customer process audit." },
    { q: "What is ISO audit?", a: "Standard compliance audit." },
    { q: "What is ISO 9001?", a: "Quality management standard." },
    { q: "What is IATF 16949?", a: "Automotive quality standard." },
    { q: "What is audit finding?", a: "Non-conformance." },
    { q: "What is observation?", a: "Minor issue." },
    { q: "What is major NC?", a: "Major non-conformance." },
    { q: "What is minor NC?", a: "Minor non-conformance." },
    { q: "What is audit checklist?", a: "Audit questions list." },
    { q: "What is process audit?", a: "Process verification." },
    { q: "What is product audit?", a: "Product quality check." },
    { q: "What is layered audit?", a: "Multi-level audit." },
    { q: "What is LPA?", a: "Layered process audit." },
    { q: "What is document control?", a: "Document management." },
    { q: "What is revision control?", a: "Version control." },
    { q: "What is change control?", a: "Managing changes." },
    { q: "What is ECN?", a: "Engineering change notice." },
    { q: "What is deviation approval?", a: "Temporary change approval." },
    { q: "What is risk analysis?", a: "Identify risks." },
    { q: "What is FMEA?", a: "Failure mode effect analysis." },
    { q: "What is PFMEA?", a: "Process FMEA." },
    { q: "What is DFMEA?", a: "Design FMEA." },
    { q: "What is severity?", a: "Impact level." },
    { q: "What is occurrence?", a: "Frequency." },
    { q: "What is detection?", a: "Detection ability." },
    { q: "What is RPN?", a: "Risk priority number." },
    { q: "RPN formula?", a: "Severity × Occurrence × Detection" },
    { q: "What is control plan?", a: "Quality control plan." },
    { q: "What is SPC?", a: "Statistical process control." },
    { q: "What is Cp?", a: "Process capability." },
    { q: "What is Cpk?", a: "Process capability index." },
    { q: "What is MSA?", a: "Measurement system analysis." },
    { q: "What is GRR?", a: "Gauge repeatability reproducibility." },
    { q: "What is calibration?", a: "Measurement accuracy check." },
    { q: "What is gauge control?", a: "Tool management." },
    { q: "What is customer complaint?", a: "Customer issue." },
    { q: "What is 8D?", a: "Problem solving method." },
    { q: "What is containment action?", a: "Immediate action." },
    { q: "What is corrective action?", a: "Permanent fix." },
    { q: "What is preventive action?", a: "Future prevention." },
    { q: "What is quality improvement?", a: "Reduce defects." },
    { q: "What is PPM reduction?", a: "Defect reduction." },
    { q: "What is yield improvement?", a: "Increase pass rate." },
    { q: "What is COPQ?", a: "Cost of poor quality." },
    { q: "What is defect trend?", a: "Defect tracking." },
    { q: "What is quality dashboard?", a: "Quality metrics display." },
    { q: "What is quality engineer role?", a: "Ensure process, product, customer quality" }
  ];

  const content = {
    videos: [
      {
        title: isHi ? "Quality engineer session -01" : "Quality engineer session -01",
        desc: isHi ? "क्वालिटी इंजीनियरिंग का परिचय - भाग 1" : "Introduction to Quality Engineering - Part 1",
        thumbnail: "https://img.youtube.com/vi/lKGNwLBq0ao/maxresdefault.jpg",
        duration: "12:45",
        category: isHi ? "क्वालिटी" : "Quality",
        views: "1.2K",
        link: "https://youtu.be/lKGNwLBq0ao?si=x0x7adPIOz_dXgg4",
        embedId: "lKGNwLBq0ao"
      },
      {
        title: isHi ? "Quality engineer session -02" : "Quality engineer session -02",
        desc: isHi ? "क्वालिटी इंजीनियरिंग प्रक्रियाएं - भाग 2" : "Quality Engineering Processes - Part 2",
        thumbnail: "https://img.youtube.com/vi/TUUo6PbMsCw/maxresdefault.jpg",
        duration: "18:20",
        category: isHi ? "क्वालिटी" : "Quality",
        views: "2.1K",
        link: "https://youtu.be/TUUo6PbMsCw?si=QjI030kG2w1SYuc4",
        embedId: "TUUo6PbMsCw"
      },
      {
        title: isHi ? "Quality engineer session -03" : "Quality engineer session -03",
        desc: isHi ? "उन्नत क्वालिटी इंजीनियरिंग - भाग 3" : "Advanced Quality Engineering - Part 3",
        thumbnail: "https://img.youtube.com/vi/_sXc_B9lEVQ/maxresdefault.jpg",
        duration: "15:30",
        category: isHi ? "क्वालिटी" : "Quality",
        views: "850",
        link: "https://youtu.be/_sXc_B9lEVQ?si=pGGt5BzG9CS_F6C_",
        embedId: "_sXc_B9lEVQ"
      }
    ],
    notes: [
      {
        title: isHi ? "SMT इंटरव्यू नोट्स" : "SMT Interview Notes",
        type: "INTERACTIVE",
        size: "100 Q&A",
        icon: MessageSquare,
        color: "text-orange-400",
        isInteractive: true,
        data: smtQuestions
      },
      {
        title: isHi ? "MI/DIP इंटरव्यू नोट्स" : "MI/DIP Interview Notes",
        type: "INTERACTIVE",
        size: "100 Q&A",
        icon: FileText,
        color: "text-cyan-400",
        isInteractive: true,
        data: miDipQuestions
      },
      {
        title: isHi ? "FATP/FA इंटरव्यू नोट्स" : "FATP/FA Interview Notes",
        type: "INTERACTIVE",
        size: "100 Q&A",
        icon: Award,
        color: "text-purple-400",
        isInteractive: true,
        data: fatpQuestions
      },
      {
        title: isHi ? "HR इंटरव्यू नोट्स" : "HR Interview Notes",
        type: "INTERACTIVE",
        size: "100 Q&A",
        icon: BookOpen,
        color: "text-emerald-400",
        isInteractive: true,
        data: hrQuestions
      },
      {
        title: isHi ? "क्वालिटी इंटरव्यू नोट्स" : "Quality Interview Notes",
        type: "INTERACTIVE",
        size: "200 Q&A",
        icon: Award,
        color: "text-blue-400",
        isInteractive: true,
        data: qualityQuestions
      }
    ],
    photos: [
      { url: "https://picsum.photos/seed/dress1/600/800", title: isHi ? "फॉर्मल ड्रेस कोड" : "Formal Dress Code" },
      { url: "https://picsum.photos/seed/office1/800/600", title: isHi ? "ऑफिस का माहौल" : "Office Environment" },
      { url: "https://picsum.photos/seed/group1/800/600", title: isHi ? "ग्रुप डिस्कशन" : "Group Discussion" },
      { url: "https://picsum.photos/seed/interview4/600/800", title: isHi ? "मॉक इंटरव्यू" : "Mock Interview" },
      { url: "https://picsum.photos/seed/smile1/800/600", title: isHi ? "सकारात्मक दृष्टिकोण" : "Positive Attitude" },
      { url: "https://picsum.photos/seed/handshake1/800/600", title: isHi ? "पेशेवर अभिवादन" : "Professional Greeting" }
    ]
  };

  const tabs = [
    { id: 'videos', label: isHi ? "वीडियो" : "Videos", icon: Video },
    { id: 'notes', label: isHi ? "नोट्स" : "Notes", icon: FileText },
    { id: 'photos', label: isHi ? "फोटो" : "Photos", icon: ImageIcon },
  ];

  return (
    <div className="p-4 md:p-8 lg:p-12 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 mb-6"
        >
          <Award size={16} />
          <span className="text-[10px] font-black uppercase tracking-[0.2em]">
            {isHi ? "करियर गाइड" : "Career Guide"}
          </span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-6 italic"
        >
          {isHi ? "इंटरव्यू" : "Interview"} <span className="text-orange-500">{isHi ? "तैयारी" : "Preparation"}</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-slate-400 text-lg max-w-2xl font-medium leading-relaxed"
        >
          {isHi 
            ? "अपने सपनों की नौकरी पाने के लिए आवश्यक संसाधनों और युक्तियों के साथ खुद को तैयार करें।" 
            : "Equip yourself with the necessary resources and tips to land your dream job."}
        </motion.p>
      </div>

      {/* Tabs Navigation */}
      <div className="flex flex-wrap gap-4 mb-12">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as Tab)}
              className={`flex items-center gap-3 px-6 py-4 rounded-2xl font-black uppercase tracking-widest transition-all duration-300 ${
                isActive 
                  ? 'bg-orange-500 text-white shadow-[0_10px_30px_rgba(249,115,22,0.3)] scale-105' 
                  : 'bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white'
              }`}
            >
              <Icon size={20} />
              <span className="text-sm">{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Content Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {activeTab === 'videos' && content.videos.map((video, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              onClick={() => setSelectedVideo(video)}
              className="group relative bg-slate-900/50 border border-white/5 rounded-3xl overflow-hidden hover:border-orange-500/30 transition-all duration-500 cursor-pointer"
            >
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={video.thumbnail} 
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/20 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-16 h-16 rounded-full bg-orange-500 flex items-center justify-center text-white shadow-2xl scale-75 group-hover:scale-100 transition-transform duration-500">
                    <Play size={32} fill="currentColor" />
                  </div>
                </div>
                <div className="absolute bottom-4 right-4 px-2 py-1 bg-slate-950/80 backdrop-blur-md rounded text-[10px] font-black text-white">
                  {video.duration}
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <div className="text-[10px] font-black text-orange-500 uppercase tracking-widest">
                    {video.category}
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-500">
                    <Eye size={12} />
                    <span className="text-[10px] font-black uppercase tracking-widest">{video.views}</span>
                  </div>
                </div>
                <h3 className="text-xl font-black text-white uppercase tracking-tight mb-2">
                  {video.title}
                </h3>
                <p className="text-sm text-slate-400 font-medium">
                  {video.desc}
                </p>
              </div>
            </motion.div>
          ))}

          {activeTab === 'notes' && content.notes.map((note, i) => {
            const Icon = note.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group p-8 bg-slate-900/50 border border-white/5 rounded-3xl hover:border-orange-500/30 transition-all duration-500 flex flex-col items-center text-center"
              >
                <div className={`w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 ${note.color} group-hover:scale-110 transition-transform duration-500`}>
                  <Icon size={40} />
                </div>
                <h3 className="text-xl font-black text-white uppercase tracking-tight mb-2">
                  {note.title}
                </h3>
                <div className="flex items-center gap-3 text-slate-500 text-[10px] font-black uppercase tracking-widest mb-8">
                  <span>{note.type}</span>
                  <span className="w-1 h-1 bg-slate-700 rounded-full" />
                  <span>{note.size}</span>
                </div>
                <button 
                  onClick={() => note.isInteractive ? setSelectedNote(note) : null}
                  className="w-full py-4 bg-white/5 hover:bg-orange-500 text-slate-400 hover:text-white border border-white/10 hover:border-orange-400 rounded-2xl font-black uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-3"
                >
                  {note.isInteractive ? <ExternalLink size={18} /> : <Download size={18} />}
                  {note.isInteractive 
                    ? (isHi ? "अभी देखें" : "View Now") 
                    : (isHi ? "डाउनलोड करें" : "Download Now")}
                </button>
              </motion.div>
            );
          })}

          {/* Video Player Modal */}
          <AnimatePresence>
            {selectedVideo && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-slate-950/90 backdrop-blur-xl"
              >
                <motion.div
                  initial={{ scale: 0.9, y: 20 }}
                  animate={{ scale: 1, y: 0 }}
                  exit={{ scale: 0.9, y: 20 }}
                  className="relative w-full max-w-5xl aspect-video bg-slate-900 border border-white/10 rounded-2xl md:rounded-[40px] shadow-2xl overflow-hidden"
                >
                  <div className="absolute top-2 right-2 md:top-6 md:right-6 z-10 flex gap-2 md:gap-3">
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(selectedVideo.link, '_blank');
                      }}
                      className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-slate-950/50 hover:bg-orange-500 backdrop-blur-md flex items-center justify-center text-white transition-all group"
                      title={isHi ? "YouTube पर देखें" : "Watch on YouTube"}
                    >
                      <ExternalLink size={18} className="group-hover:scale-110 transition-transform md:w-5 md:h-5" />
                    </button>
                    <button 
                      onClick={() => setSelectedVideo(null)}
                      className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-slate-950/50 hover:bg-white/10 backdrop-blur-md flex items-center justify-center text-white transition-colors"
                    >
                      <X size={20} className="md:w-6 md:h-6" />
                    </button>
                  </div>
                  
                  <iframe
                    src={`https://www.youtube.com/embed/${selectedVideo.embedId}?autoplay=1`}
                    title={selectedVideo.title}
                    className="w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Note Detail View */}
          <AnimatePresence>
            {selectedNote && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-slate-950/90 backdrop-blur-xl"
              >
                <motion.div
                  initial={{ scale: 0.9, y: 20 }}
                  animate={{ scale: 1, y: 0 }}
                  exit={{ scale: 0.9, y: 20 }}
                  className="relative w-full max-w-4xl max-h-[80vh] bg-slate-900 border border-white/10 rounded-2xl md:rounded-[40px] shadow-2xl overflow-hidden flex flex-col"
                >
                  <div className="p-4 md:p-8 border-b border-white/5 flex items-center justify-between bg-slate-900/50">
                    <div>
                      <h2 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight italic">
                        {selectedNote.title}
                      </h2>
                      <p className="text-orange-500 text-[10px] font-black uppercase tracking-[0.3em]">
                        {selectedNote.size} {isHi ? "प्रश्न और उत्तर" : "Questions & Answers"}
                      </p>
                    </div>
                    <button 
                      onClick={() => setSelectedNote(null)}
                      className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white transition-colors shrink-0 ml-4"
                    >
                      <X size={20} className="md:w-6 md:h-6" />
                    </button>
                  </div>
                  
                  <div className="flex-1 overflow-y-auto p-4 md:p-8 custom-scrollbar">
                    <div className="space-y-4">
                      {selectedNote.data.map((item: any, idx: number) => (
                        <div 
                          key={idx}
                          className="p-4 md:p-6 bg-white/5 border border-white/5 rounded-2xl hover:border-orange-500/30 transition-all group"
                        >
                          <div className="flex items-start gap-4">
                            <span className="text-orange-500 font-black text-lg">
                              {idx + 1}.
                            </span>
                            <div className="space-y-2">
                              <h4 className="text-white font-black uppercase tracking-tight text-lg">
                                {item.q}
                              </h4>
                              <p className="text-slate-400 font-medium leading-relaxed">
                                {item.a}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {activeTab === 'photos' && (
            <div className="col-span-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {content.photos.map((photo, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                  className="group relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/5"
                >
                  <img 
                    src={photo.url} 
                    alt={photo.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-[10px] font-black text-white uppercase tracking-widest text-center">
                      {photo.title}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Footer CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="mt-24 p-12 rounded-[40px] bg-gradient-to-br from-orange-500 to-orange-600 relative overflow-hidden text-center"
      >
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
        <div className="relative z-10">
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-6 italic">
            {isHi ? "मॉक इंटरव्यू के लिए तैयार हैं?" : "Ready for a Mock Interview?"}
          </h2>
          <p className="text-orange-100 text-lg mb-10 max-w-xl mx-auto font-medium">
            {isHi 
              ? "हमारे विशेषज्ञों के साथ अभ्यास करें और अपना आत्मविश्वास बढ़ाएं।" 
              : "Practice with our experts and boost your confidence before the big day."}
          </p>
          <button className="px-10 py-5 bg-white text-orange-600 rounded-2xl font-black uppercase tracking-widest hover:scale-105 transition-transform shadow-2xl">
            {isHi ? "अभी बुक करें" : "Book Session Now"}
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Interview;
