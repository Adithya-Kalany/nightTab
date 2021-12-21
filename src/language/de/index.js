import { APP_NAME } from '../../constant';

export const de = {};

de.menu = {
  theme: {
    label: 'Thema',
    subNav: {
      preset: 'Voreinstellung',
      saved: 'Gerettet',
      style: 'Stil',
      color: 'Farbe',
      accent: 'Akzent',
      font: 'Schriftart',
      radius: 'Radius',
      shadow: 'Schatten',
      shade: 'Abdeckung',
      opacity: 'Opazität',
      background: 'Hintergrund',
      layout: 'Layout',
      header: 'Header',
      bookmark: 'Lesezeichen'
    }
  },
  layout: {
    label: 'Layout',
    subNav: {
      scaling: 'Skalierung',
      area: 'Bereich',
      padding: 'Polsterung',
      gutter: 'Rinne',
      alignment: 'Ausrichtung',
      page: 'Seite'
    }
  },
  header: {
    label: 'Header',
    subNav: {
      alignment: 'Ausrichtung',
      greeting: 'Gruß',
      transitional: 'Übergangswörter',
      clock: 'Uhr',
      date: 'Datum',
      search: 'Suche'
    }
  },
  bookmark: {
    label: 'Lesezeichen',
    subNav: {
      general: 'Allgemein',
      style: 'Stil',
      orientation: 'Orientierung',
      sort: 'Sortieren'
    }
  },
  group: {
    label: 'Gruppe',
    subNav: {
      alignment: 'Ausrichtung',
      name: 'Name',
      collapse: 'Zusammenbruch',
      toolbar: 'Symbolleiste'
    }
  },
  toolbar: {
    label: 'Symbolleiste',
    subNav: {
      size: 'Größe',
      location: 'Ort',
      position: 'Position',
      controls: 'Kontrollen'
    }
  },
  data: {
    label: 'Daten',
    subNav: {
      restore: 'Wiederherstellen',
      backup: 'Sicherung',
      clear: 'Klar'
    }
  },
  support: {
    label: 'Unterstützung'
  },
  coffee: {
    label: 'Kaffee'
  },
  [APP_NAME]: {
    label: APP_NAME
  }
};

de.theme = {
  preset: {
    helper: ['Das Anwenden einer Voreinstellung ersetzt die aktuelle Farbe, den Akzent, die Schriftart, den Stil, den Radius, den Schatten, den Schatten und den Hintergrund.']
  },
  saved: {
    helper: ['Beim Speichern eines Themas werden die aktuelle Farbe, der Akzent, die Schriftart, der Stil, der Radius, der Schatten, der Schatten und der Hintergrund aufgezeichnet.'],
    save: 'Aktuelles Thema speichern',
    edit: 'Gespeicherte Designs bearbeiten'
  },
  style: {
    dark: {
      label: 'Dunkelmodus'
    },
    light: {
      label: 'Lichtmodus'
    },
    automatic: {
      label: 'Automatisch',
      description: 'Folgen Sie dem System Hell- oder Dunkelmodus.'
    }
  },
  color: {
    shade: {
      helper: [
        'Hintergründe, Lesezeichen und Modals verwenden Schattierungen von links.',
        'Text- und Formularelemente verwenden Schattierungen von rechts.',
        'Für einen hellen Look wechseln Sie zum Lichtstil und wählen dann eine Primärfarbe aus. Und umgekehrt für einen dunklen Look.'
      ]
    },
    range: {
      primary: {
        h: 'Primärfarbe',
        s: 'Sättigung'
      }
    },
    contrast: {
      label: 'Kontrastumfang',
      left: 'Kontraststart',
      right: 'Kontrast Ende',
      helper: [
        'Bewegen Sie die Kontrastbereichsregler nah beieinander, um einen gedämpften Look zu erzielen.',
        'Bewegen Sie die Kontrastbereichsregler weit auseinander, um einen scharfen, lebendigen Look zu erzielen.'
      ]
    },
  },
  accent: {
    preset: {
      color: {
        grey: 'Grau',
        red: 'Rot',
        orange: 'Orange',
        yellow: 'Gelb',
        lime: 'Limette',
        green: 'Grün',
        aqua: 'Aqua',
        cyan: 'Cyan',
        teal: 'Blaugrün',
        blue: 'Blau',
        purple: 'Violett',
        magenta: 'Magenta',
        fuchsia: 'Fuchsie'
      },
      modifier: {
        light: {
          level3: 'Super extra leicht',
          level2: 'Extra-Licht',
          level1: 'Hell'
        },
        dark: {
          level3: 'Super extra dunkel',
          level2: 'Extra dunkel',
          level1: 'Dunkel'
        }
      }
    },
    color: 'Akzentfarbe',
    random: {
      active: 'Zufällige Akzentfarbe beim Laden/Aktualisieren',
      style: {
        any: 'Beliebig',
        light: 'Hell',
        dark: 'Dunkel',
        pastel: 'Pastell',
        saturated: 'Gesättigt'
      },
      randomise: 'Jetzt zufällig auswählen'
    },
    cycle: {
      active: 'Akzentfarbe automatisch ändern',
      speed: 'Verzögerung ändern',
      step: 'Schritte ändern',
      alert: 'Seien Sie vorsichtig, da ein sich schnell ändernder Akzentfarbton zu Leistungsproblemen führen kann.',
      helper: ['Die automatische Änderung des Akzentfarbtons funktioniert nicht, wenn die Akzentfarbe grau oder schwarz ist.']
    }
  },
  font: {
    display: {
      name: {
        label: 'Schriftart anzeigen',
        placeholder: 'Google-Schriftname',
        helper: {
          p1: {
            a1: 'Benutze einen ',
            a2: 'Google-Schriftart',
            a3: ' um Uhr, Datum, Gruppennamen und Lesezeichenbuchstaben anzupassen.',
          },
          p2: 'Fügen Sie einen Schriftartnamen hinzu, wie er in Google Fonts angezeigt wird, einschließlich Großbuchstaben und Leerzeichen, beispiel: eintreten "Fredoka One" oder "Kanit".',
          p3: 'Löschen Sie das Feld, um die Standardschriftart zu verwenden "Fjalla One".'
        }
      },
      weight: {
        label: 'Schriftstärke',
        light: 'Hell',
        regular: 'Regulär',
        bold: 'Deutlich',
        helper: ['Nicht alle Schriftarten unterstützen alle Gewichtungen. Sehen Sie auf der Google Font-Seite nach, welche verfügbar sind.']
      },
      style: {
        normal: 'Normal',
        italic: 'Kursiv'
      }
    },
    ui: {
      name: {
        label: 'Schriftart der Benutzeroberfläche',
        placeholder: 'Google-Schriftname',
        helper: {
          p1: {
            a1: 'Benutze einen ',
            a2: 'Google-Schriftart',
            a3: ' um den Lesezeichennamen, die URL und die Formularelemente anzupassen.',
          },
          p2: 'Fügen Sie einen Schriftartnamen hinzu, wie er in Google Fonts angezeigt wird, einschließlich Großbuchstaben und Leerzeichen, beispiel: eintreten "Roboto", "Source Sans Pro" or "Noto Sans".',
          p3: 'Löschen Sie das Feld, um die Standardschriftart zu verwenden "Open Sans".'
        }
      },
      weight: {
        label: 'Schriftstärke',
        light: 'Hell',
        regular: 'Regulär',
        bold: 'Deutlich',
        helper: ['Nicht alle Schriftarten unterstützen alle Gewichtungen. Sehen Sie auf der Google Font-Seite nach, welche verfügbar sind.']
      },
      style: {
        normal: 'Normal',
        italic: 'Kursiv'
      }
    }
  },
  radius: 'Eckenradius',
  shadow: 'Schattengröße',
  shade: {
    opacity: 'Deckkraft des Schattens',
    blur: {
      label: 'Schattenunschärfe',
      helper: ['Nicht von allen Browsern unterstützt.']
    }
  },
  opacity: {
    general: {
      label: 'Alle Deckkraft',
      helper: [
        'Ändern Sie die Deckkraft der Suchleiste, der Lesezeichen, der Gruppensteuerelemente und der Symbolleiste.',
        'Die Deckkraft kann auch beim Bearbeiten einzelner Lesezeichen geändert werden.'
      ]
    },
    toolbar: 'Symbolleiste',
    bookmark: 'Lesezeichen',
    search: 'Suchbox',
    groupToolbar: 'Gruppensymbolleiste'
  },
  background: {
    type: {
      theme: {
        label: 'Hintergrund nach Thema',
        description: ['Verwenden Sie die vom Thema definierte Hintergrundfarbe.']
      },
      accent: {
        label: 'Hintergrund von Akzent',
        description: ['Verwenden Sie die Akzentfarbe für den Hintergrund.']
      },
      color: 'Benutzerdefinierte Farbe',
      gradient: 'Gradient',
      image: 'Bild',
      video: 'Video',
    },
    color: 'Hintergrundfarbe',
    gradient: {
      angle: 'Hintergrundverlaufswinkel',
      start: 'Start des Hintergrundverlaufs',
      end: 'Ende des Hintergrundverlaufs'
    },
    image: {
      alert: {
        p1: 'Lokale Bilder können nicht mehr verwendet werden. Bilder müssen irgendwo online gehostet werden.',
        p2: 'Warum hat sich das geändert?'
      },
      url: {
        lable: 'URL',
        placeholder: 'https://www.beispiel.com/bild.jpg',
        helper: [
          'Fügen Sie mehr als eine URL hinzu, die durch Leerzeichen oder in neuen Zeilen getrennt ist, um ein zufälliges Hintergrundbild beim Laden zu erhalten.',
          'Unsplash kann für zufällige Bilder verwendet werden, beispiel:',
          'https://source.unsplash.com/random/1920x1080/?nacht,tag,himmel',
          'Parameter ändern nach .../random/ für mehr optionen. Ladezeiten können variieren.'
        ]
      },
      blur: 'Verwischen',
      grayscale: 'Graustufen',
      scale: 'Skala',
      accent: 'Akzent',
      opacity: 'Opacity',
      vignette: {
        opacity: 'Vignette',
        range: {
          label: 'Schattenanfang und -ende',
          left: 'Schattenende',
          right: 'Schattenstart'
        }
      }
    },
    video: {
      alert: {
        p1: 'YouTube-Seiten-URLs können nicht verwendet werden.',
        p2: 'So verlinken Sie eine videodatei.'
      },
      url: {
        lable: 'URL',
        placeholder: 'https://www.beispiel.com/video.mp4',
        helper: [
          'Hintergrundvideo unterstützt nur eine direkte URL zu einer Videodatei. Unterstützt MP4 und WebM Format.',
          'Fügen Sie mehr als eine URL hinzu, die durch Leerzeichen oder in neuen Zeilen getrennt ist, um ein zufälliges Hintergrundvideo beim Laden zu erhalten.'
        ]
      },
      blur: 'Verwischen',
      grayscale: 'Graustufen',
      scale: 'Skala',
      accent: 'Akzent',
      opacity: 'Opacity',
      vignette: {
        opacity: 'Vignette',
        range: {
          label: 'Schattenanfang und -ende',
          start: 'Schattenende',
          end: 'Schattenstart'
        }
      }
    }
  },
  layout: {
    color: {
      label: 'Hintergrundfarbe des Layouts',
      by: {
        transparent: {
          label: 'Transparent',
          description: 'Keine Hintergrundfarbe hinter dem Layout.'
        },
        custom: {
          label: 'Benutzerdefinierte Farbe',
          description: 'Verwenden Sie eine benutzerdefinierte Farbe hinter dem Layout.'
        }
      },
      color: 'Hintergrundfarbe des Layouts',
      opacity: 'Hintergrundopazität',
      blur: {
        label: 'Hintergrundunschärfe',
        helper: ['Nicht von allen Browsern unterstützt.']
      }
    },
    divider: 'Trenner zwischen Kopfzeile und Lesezeichenbereich'
  },
  header: {
    color: {
      label: 'Hintergrundfarbe der Kopfzeile',
      by: {
        transparent: {
          label: 'Transparent',
          description: 'Keine Hintergrundfarbe hinter dem Header-Bereich.'
        },
        custom: {
          label: 'Benutzerdefinierte Farbe',
          description: 'Verwenden Sie eine benutzerdefinierte Farbe hinter dem Kopfzeilenbereich.'
        }
      },
      color: 'Hintergrundfarbe der Kopfzeile',
      opacity: 'Hintergrundopazität',
    }
  },
  bookmark: {
    color: {
      label: 'Hintergrundfarbe für Lesezeichen',
      by: {
        transparent: {
          label: 'Transparent',
          description: 'Keine Hintergrundfarbe hinter dem Lesezeichenbereich.'
        },
        custom: {
          label: 'Benutzerdefinierte Farbe',
          description: 'Verwenden Sie eine benutzerdefinierte Farbe hinter dem Lesezeichenbereich.'
        }
      },
      color: 'Hintergrundfarbe für Lesezeichen',
      opacity: 'Hintergrundopazität',
    },
    item: {
      border: {
        label: 'Lesezeichenrahmen',
        helper: [
          'Der Lesezeichenrahmen kann auch beim Bearbeiten einzelner Lesezeichen geändert werden.',
          'Die Farbe des Rahmens wird durch den Akzent bestimmt, der auch beim Bearbeiten einzelner Lesezeichen geändert werden kann.'
        ]
      },
      rainbow: {
        add: 'Fügen Sie jedem Lesezeichen einen einzigartigen Akzent hinzu',
        remove: 'Alle Akzentüberschreibungen entfernen',
        helper: ['Der benutzerdefinierte Lesezeichenakzent kann auch beim Bearbeiten einzelner Lesezeichen geändert werden.']
      }
    }
  }
};

de.layout = {
  scaling: {
    size: 'Global size'
  },
  area: {
    width: 'Layout area width',
    header: {
      width: 'Header area width',
      justify: {
        label: 'Header area alignment',
        left: 'Left',
        center: 'Center',
        right: 'Right',
        helper1: ['Effects may not be visible if the Header Area is full width.'],
        helper2: ['Only available when Layout Direction is Vertical and Header items are shown.']
      }
    },
    bookmark: {
      width: 'Bookmark area width',
      justify: {
        label: 'Bookmark area alignment',
        left: 'Left',
        center: 'Center',
        right: 'Right',
        helper1: ['Effects may not be visible if the Bookmark Area is full width.'],
        helper2: ['Only available when Layout Direction is Vertical and Header items are shown.']
      }
    }
  },
  padding: 'Space around Header and Bookmark Area',
  gutter: 'Space between Header and Bookmark items',
  alignment: {
    label: 'Area alignment',
    topLeft: 'Top Left',
    topCenter: 'Top Center',
    topRight: 'Top Right',
    centerLeft: 'Center Left',
    centerCenter: 'Center Center',
    centerRight: 'Center Right',
    bottomLeft: 'Bottom Left',
    bottomCenter: 'Bottom Center',
    bottomRight: 'Bottom Right'
  },
  direction: {
    horizontal: {
      label: 'Align horizontal',
      description: 'Stack the Header and Bookmarks in a row side by side.'
    },
    vertical: {
      label: 'Align vertical',
      description: 'Stack the Header and Bookmarks in a column one above the other.'
    }
  },
  order: {
    headerBookmark: {
      label: 'Header then Bookmarks',
      description: 'Order the Header area to appear before the Bookmarks area.'
    },
    bookmarkHeader: {
      label: 'Bookmarks then Header',
      description: 'Order the Bookmarks area to appear before the Header area.'
    }
  },
  page: {
    title: 'Title',
    favicon: {
      label: 'Favicon URL',
      placeholder: 'https://www.example.com/favicon.svg',
      helper: ['Not supported by all browsers.']
    },
    scrollbar: {
      label: 'Scrollbar',
      auto: 'Auto',
      thin: 'Thin',
      none: 'Hidden',
      helper: ['Not supported by all browsers.']
    },
    overscroll: {
      active: 'Scroll past end',
      unblur: {
        label: 'Unblur background image or video',
        description: [
          'Background image or video will unblur when scrolled to the bottom of the page.',
          'Image or video blur can be found under Theme Background.'
        ]
      }
    }
  }
};
