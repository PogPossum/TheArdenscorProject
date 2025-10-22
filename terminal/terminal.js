class DOSTerminal {
  constructor() {
    this.terminal = document.getElementById('terminal');
    this.currentMenu = 'boot';
    this.currentSubMenu = null;
    this.isLoading = false;
    this.init();
  }

  init() {
    this.startBootSequence();
  }

  async typeText(text, speed = 50) {
    for (let char of text) {
      this.terminal.textContent += char;
      await this.sleep(speed);
    }
  }

  async sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  clearTerminal() {
    this.terminal.textContent = '';
  }

  addLine(text = '', className = '') {
    const line = document.createElement('div');
    line.textContent = text;
    if (className) line.className = className;
    this.terminal.appendChild(line);
    this.terminal.scrollTop = this.terminal.scrollHeight;
  }

  async startBootSequence() {
    this.clearTerminal();
    
    // Boot sequence
    await this.typeText('Initializing system...\n');
    await this.sleep(1000);
    await this.typeText('Loading...\n');
    await this.sleep(1500);
    await this.typeText('Starting components...\n');
    await this.sleep(1000);

    // Loading animation
    for (let i = 1; i <= 2; i++) {
      const progress = '█'.repeat(i) + '░'.repeat(10-i);
      this.terminal.textContent = this.terminal.textContent.replace(/Loading system \[.*\]/, '');
      await this.typeText(`Loading system [${progress}]`);
      await this.sleep(200);
      this.terminal.textContent += '\n';
    }

    await this.sleep(1000);
    this.clearTerminal();
    
    // System message
    this.addLine('');
    this.addLine('---------------------------------------------------------------', 'system-text');
    this.addLine('                                                               ', 'system-text');
    this.addLine('            Welcome to Int. Resume Beta Version', 'highlight-text');
    this.addLine('      (C) Copyright /\\RDNSCR Computing Ltd. 20XX-2076', 'system-text');
    this.addLine('                                                               ', 'system-text');
    this.addLine('---------------------------------------------------------------', 'system-text');
    this.addLine('');
    this.addLine('')
    await this.sleep(2500);

    this.showMainMenu();
  }

  showMainMenu() {
    this.clearTerminal();
    this.currentMenu = 'main';
    this.currentSubMenu = null;

    // Get current date/time
    const now = new Date();
    const dateStr = now.toISOString().slice(0, 10).replace(/-/g, '-');
    const timeStr = now.toTimeString().slice(0, 5);

    this.addLine('');
    this.addLine('#################################################################', 'ascii-art');
    this.addLine('                                                                 ', 'ascii-art');
    this.addLine('      __ __      _____  _____  _   _  _____  _____ _____          ', 'ascii-art');
    this.addLine('     / / \\ \\    |  __ \\|  __ \\| \\ | |/ ____|/ ____|  __ \\ ', 'ascii-art');
    this.addLine('    / /   \\ \\   | |__) | |  | |  \\| | (___ | |    | |__) |', 'ascii-art');
    this.addLine('   / /     \\ \\  |  _  /| |  | | . ` |\\___ \\| |    |  _  / ', 'ascii-art');
    this.addLine('  / /       \\ \\ | | \\ \\| |__| | |\\  |____) | |____| | \\ \\ ', 'ascii-art');
    this.addLine(' /_/         \\_\\|_|  \\_\\_____/|_| \\_|_____/ \\_____|_|  \\_\\ ', 'ascii-art');
    this.addLine('                                                                 ', 'ascii-art');
    this.addLine('                     Interactive Resume', 'highlight-text');
    this.addLine('                        By Ashley A. Ardenscor', 'system-text');
    this.addLine('                                                                 ', 'ascii-art');
    this.addLine('#################################################################', 'ascii-art');
    this.addLine('');
    this.addLine(` Last login: time: ${timeStr}  date: ${dateStr}`, 'system-text');
    this.addLine('');
    this.addLine('=================================================================', 'ascii-art');
    this.addLine(' [1] Om mig             [4] Arbejdserfaring ', 'menu-option');
    this.addLine(' [2] Uddannelse         [5] PLACEHOLDER', 'menu-option');
    this.addLine(' [3] Kontakt            [0] Exit', 'menu-option');
    this.addLine('=================================================================', 'ascii-art');
    this.addLine('');
    
    this.addInputPrompt();
  }

  addInputPrompt() {
    const prompt = document.createElement('div');
    prompt.innerHTML = 'Choose an option (): <span class="blink">█</span>';
    this.terminal.appendChild(prompt);
    this.terminal.scrollTop = this.terminal.scrollHeight;
    
    // Add clickable options
    this.addClickableOptions();
  }

  addClickableOptions() {
    const options = [
      { key: '1', action: () => this.showOmMigMenu() },
      { key: '2', action: () => this.showUddandelseMenu() },
      { key: '3', action: () => this.showKontaktMenu() },
      { key: '4', action: () => this.showArbejdeMenu() },
      { key: '5', action: () => this.showMainMenu() },
      { key: '0', action: () => this.exitProgram() }
    ];

    options.forEach(option => {
      const element = document.createElement('div');
      element.textContent = `[${option.key}]`;
      element.className = 'menu-option';
      element.style.cursor = 'pointer';
      element.style.display = 'inline-block';
      element.style.margin = '0 5px';
      element.onclick = option.action;
      this.terminal.appendChild(element);
    });
  }

  async showOmMigMenu() {
    this.clearTerminal();
    this.currentMenu = 'om';
    
    this.addLine('');
    this.addLine('#################################################################', 'ascii-art');
    this.addLine('                                                                 ', 'ascii-art');
    this.addLine('    (C) Copyright /\\RDNSCR Computing Ltd. Interactive Resume', 'system-text');
    this.addLine('                                                                 ', 'ascii-art');
    this.addLine('#################################################################', 'ascii-art');
    this.addLine('                        -- Om Mig --', 'highlight-text');
    this.addLine('=================================================================', 'ascii-art');
    this.addLine('                                                                 ', 'ascii-art');
    this.addLine(' [1]  -- Hvem er jeg.', 'menu-option');
    this.addLine(' [2]  -- Fritid og Hobby.', 'menu-option');
    this.addLine(' [3]  -- Praktisk Info.', 'menu-option');
    this.addLine(' [0]  -- Return.', 'menu-option');
    this.addLine('                                                                 ', 'ascii-art');
    this.addLine('=================================================================', 'ascii-art');
    
    this.addLine('Choose an option ():', 'system-text');
    this.addClickableSubOptions([
      { key: '1', action: () => this.showOmMig1() },
      { key: '2', action: () => this.showFritidHobby() },
      { key: '3', action: () => this.showPraktiskInfo() },
      { key: '0', action: () => this.showMainMenu() }
    ]);
  }

  async showOmMig1() {
    this.clearTerminal();
    
    this.addLine('');
    this.addLine('#################################################################', 'ascii-art');
    this.addLine('                                                                 ', 'ascii-art');
    this.addLine('    (C) Copyright /\\RDNSCR Computing Ltd. Interactive Resume', 'system-text');
    this.addLine('                                                                 ', 'ascii-art');
    this.addLine('#################################################################', 'ascii-art');
    this.addLine('                        -- Om Mig --', 'highlight-text');
    this.addLine('=================================================================', 'ascii-art');
    this.addLine('                                                                 ', 'ascii-art');
    this.addLine(' [1]  -- Hvem er jeg.', 'menu-option');
    this.addLine(' --------------------------------------------------', 'ascii-art');
    this.addLine('   [  Jeg er en engageret, nysgerring og udadvendt ', 'system-text');
    this.addLine('   [ kvinde på 26, som bor med min kæreste i Randers.', 'system-text');
    this.addLine('   [  Jeg kommer oprindeligt fra Sjælland, ', 'system-text');
    this.addLine('   [ men flyttede til Aarhus med min mor i 00\'erne.', 'system-text');
    this.addLine('   [  Jeg har altid haft en stor fasination omkring ', 'system-text');
    this.addLine('   [ teknologi og hvordan tingene virker.', 'system-text');
    this.addLine(' --------------------------------------------------', 'ascii-art');
    this.addLine(' [2]  -- Fritid og Hobby.', 'menu-option');
    this.addLine(' [3]  -- Praktisk Info.', 'menu-option');
    this.addLine(' [0]  -- Return.', 'menu-option');
    this.addLine('                                                                 ', 'ascii-art');
    this.addLine('=================================================================', 'ascii-art');
    
    const prompt = document.createElement('div');
    prompt.innerHTML = 'Choose an option (): <span class="blink">█</span>';
    this.terminal.appendChild(prompt);
    this.terminal.scrollTop = this.terminal.scrollHeight;
    this.addClickableSubOptions([
      { key: '1', action: () => this.showOmMig1() },
      { key: '2', action: () => this.showFritidHobby() },
      { key: '3', action: () => this.showPraktiskInfo() },
      { key: '0', action: () => this.showMainMenu() }
    ]);
  }

  async showFritidHobby() {
    this.clearTerminal();
    
    this.addLine('');
    this.addLine('#################################################################', 'ascii-art');
    this.addLine('                                                                 ', 'ascii-art');
    this.addLine('    (C) Copyright /\\RDNSCR Computing Ltd. Interactive Resume', 'system-text');
    this.addLine('                                                                 ', 'ascii-art');
    this.addLine('#################################################################', 'ascii-art');
    this.addLine('                        -- Om Mig --', 'highlight-text');
    this.addLine('=================================================================', 'ascii-art');
    this.addLine('                                                                 ', 'ascii-art');
    this.addLine(' [1]  -- Hvem er jeg.', 'menu-option');
    this.addLine(' [2]  -- Fritid og Hobby.', 'menu-option');
    this.addLine('   --------------------------------------------------', 'ascii-art');
    this.addLine('   [  Jeg samler på retro spillekonsoller og reperare ', 'system-text');
    this.addLine('   [ dem selv løbende, hvis de går i stykker.', 'system-text');
    this.addLine('   [  Jeg kan li at være sammen med venner og ', 'system-text');
    this.addLine('   [ min familie når chancen byder sig.', 'system-text');
    this.addLine('   [  Jeg er gerne aktiv, har spillet airsoft og ', 'system-text');
    this.addLine('   [ tager på skiferie årligt hvor jeg snowboarder.', 'system-text');
    this.addLine('   --------------------------------------------------', 'ascii-art');
    this.addLine(' [3]  -- Praktisk Info.', 'menu-option');
    this.addLine(' [0]  -- Return.', 'menu-option');
    this.addLine('                                                                 ', 'ascii-art');
    this.addLine('=================================================================', 'ascii-art');
    
    this.addLine('Choose an option ():', 'system-text');
    this.addClickableSubOptions([
      { key: '1', action: () => this.showOmMig1() },
      { key: '2', action: () => this.showFritidHobby() },
      { key: '3', action: () => this.showPraktiskInfo() },
      { key: '0', action: () => this.showMainMenu() }
    ]);
  }

  async showPraktiskInfo() {
    this.clearTerminal();
    
    this.addLine('');
    this.addLine('#################################################################', 'ascii-art');
    this.addLine('                                                                 ', 'ascii-art');
    this.addLine('    (C) Copyright /\\RDNSCR Computing Ltd. Interactive Resume', 'system-text');
    this.addLine('                                                                 ', 'ascii-art');
    this.addLine('#################################################################', 'ascii-art');
    this.addLine('                        -- Om Mig --', 'highlight-text');
    this.addLine('=================================================================', 'ascii-art');
    this.addLine('                                                                 ', 'ascii-art');
    this.addLine(' [1]  -- Hvem er jeg.', 'menu-option');
    this.addLine(' [2]  -- Fritid og Hobby.', 'menu-option');
    this.addLine(' [3]  -- Praktisk Info.', 'menu-option');
    this.addLine('   --------------------------------------------------', 'ascii-art');
    this.addLine('   [ Sprog: Dansk og Engelsk', 'system-text');
    this.addLine('   [ Bopæl: Randers C.', 'system-text');
    this.addLine('   [ Kørekort B', 'system-text');
    this.addLine('   --------------------------------------------------', 'ascii-art');
    this.addLine(' [0]  -- Return.', 'menu-option');
    this.addLine('                                                                 ', 'ascii-art');
    this.addLine('=================================================================', 'ascii-art');
    
    this.addLine('Choose an option ():', 'system-text');
    this.addClickableSubOptions([
      { key: '1', action: () => this.showOmMig1() },
      { key: '2', action: () => this.showFritidHobby() },
      { key: '3', action: () => this.showPraktiskInfo() },
      { key: '0', action: () => this.showMainMenu() }
    ]);
  }

  async showUddandelseMenu() {
    this.clearTerminal();
    
    this.addLine('');
    this.addLine('#################################################################', 'ascii-art');
    this.addLine('                                                                 ', 'ascii-art');
    this.addLine('    (C) Copyright /\\RDNSCR Computing Ltd. Interactive Resume', 'system-text');
    this.addLine('                                                                 ', 'ascii-art');
    this.addLine('#################################################################', 'ascii-art');
    this.addLine('                   -- Uddannelsesforløb --', 'highlight-text');
    this.addLine('=================================================================', 'ascii-art');
    this.addLine(' ');
    this.addLine('[] -- Hovedforløb 1 - Data og IT / Mercantec, Viborg', 'system-text');
    this.addLine('[] -- Grundforløb 2 - Data og Kommunikation / Tradium, Randers', 'system-text');
    this.addLine('[] -- Medie og Journalistik / FGU, Aarhus ', 'system-text');
    this.addLine('[] -- Mediefag / Produktionskole, Aarhus', 'system-text');
    this.addLine('[] -- 10. Klasse / HF og VUC , Aarhus', 'system-text');
    this.addLine('[] -- 9. Klasse / Efterskolen Ådalen, Hørning', 'system-text');
    this.addLine('                                                                 ', 'ascii-art');
    this.addLine('=================================================================', 'ascii-art');
    this.addLine('');
    
    this.addLine('Choose an option ():', 'system-text');
      this.addClickableSubOptions([
      { key: '0] -- Return', action: () => this.showMainMenu() }
    ]);
  }

  async showKontaktMenu() {
    this.clearTerminal();
    
    this.addLine('');
    this.addLine('#################################################################', 'ascii-art');
    this.addLine('                                                                 ', 'ascii-art');
    this.addLine('    (C) Copyright /\\RDNSCR Computing Ltd. Interactive Resume', 'system-text');
    this.addLine('                                                                 ', 'ascii-art');
    this.addLine('#################################################################', 'ascii-art');
    this.addLine('                    -- Kontakt Infomation --', 'highlight-text');
    this.addLine('=================================================================', 'ascii-art');
    this.addLine('                                                                 ', 'ascii-art');
    this.addLine(' [  Navn: Ashley A. Ardenscor', 'system-text');
    this.addLine(' [  Email: ashleyardenscor@gmail.com', 'system-text');
    this.addLine(' [  LinkdIn: Ashley Ardenscor', 'system-text');
    this.addLine(' [  GitHub: PogPossum', 'system-text');
    this.addLine('                                                                 ', 'ascii-art');this.addLine(' ');
    this.addLine('=================================================================', 'ascii-art');
    this.addLine('');
    
    this.addLine('Choose an option ():', 'system-text');
      this.addClickableSubOptions([
      { key: '0] -- Return', action: () => this.showMainMenu() }
    ]);
  }

  async showArbejdeMenu() {
    this.clearTerminal();
    
    this.addLine('');
    this.addLine('#################################################################', 'ascii-art');
    this.addLine('                                                                 ', 'ascii-art');
    this.addLine('    (C) Copyright /\\RDNSCR Computing Ltd. Interactive Resume', 'system-text');
    this.addLine('                                                                 ', 'ascii-art');
    this.addLine('#################################################################', 'ascii-art');
    this.addLine('                    -- Arbejdserfaring --', 'highlight-text');
    this.addLine('=================================================================', 'ascii-art');
    this.addLine('                                                                 ', 'ascii-art');
    this.addLine('[] -- Mercantec SOC Helpdesk / Mercantec, Viborg', 'system-text');
    this.addLine('[] -- Frivillig Intern IT Support / EuroSKills 2025, Herning', 'system-text');
    this.addLine('                                                                 ', 'ascii-art');
    this.addLine('=================================================================', 'ascii-art');
    this.addLine('');
    
    this.addLine('Choose an option ():', 'system-text');
      this.addClickableSubOptions([
      { key: '0] -- Return', action: () => this.showMainMenu() }
    ]);
  }

  addClickableSubOptions(options) {
    options.forEach(option => {
      const element = document.createElement('div');
      element.textContent = `[${option.key}]`;
      element.className = 'menu-option';
      element.style.cursor = 'pointer';
      element.style.display = 'inline-block';
      element.style.margin = '0 5px';
      element.onclick = option.action;
      this.terminal.appendChild(element);
    });
  }

  exitProgram() {
    this.clearTerminal();
    this.addLine('Thank you for using RDNSCR Interactive Resume!', 'success-text');
    this.addLine('Goodbye!', 'highlight-text');
    
    setTimeout(() => {
      this.startBootSequence();
    }, 2500);
  }
}

// Initialize terminal when page loads
document.addEventListener('DOMContentLoaded', () => {
  new DOSTerminal();
});

// Keyboard support
document.addEventListener('keydown', (e) => {
  if (e.key >= '0' && e.key <= '9') {
    // Handle number key presses
    const terminal = document.getElementById('terminal');
    const options = terminal.querySelectorAll('.menu-option');
    options.forEach(option => {
      if (option.textContent.includes(`[${e.key}]`)) {
        option.click();
      }
    });
  }
});

