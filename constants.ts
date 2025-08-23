import { ShockData, KeyPointData, ConditionData, PostnatalShockData, PathologyData, Module2ConflictData } from './types';

export const SHOCK_DATA: ShockData[] = [
  {
    id: 1,
    shock: 'Amenaza de aborto',
    description: 'Síntomas o diagnóstico de pérdida inminente, reposo obligado, miedo intenso.',
    conflict: 'Amenaza directa a la vida, pérdida de sostén.',
    pairs: 'Suprarrenal (-) → Suprarrenal (+) | Pericardio (-) → Suprarrenal (+)',
    benefits: 'Fortalece el eje vital, calma el estrés, favorece la estabilidad energética del embarazo.'
  },
  {
    id: 2,
    shock: 'Diagnóstico médico alarmante',
    description: 'Comunicación de riesgo vital o malformación.',
    conflict: 'Miedo frontal, hiperalerta.',
    pairs: 'Bulbo raquídeo (-) → Suprarrenal (+) | Timo (-) → Suprarrenal (+)',
    benefits: 'Regula el sistema nervioso autónomo, baja la hipervigilancia.'
  },
  {
    id: 3,
    shock: 'Pérdida de un ser querido',
    description: 'Duelo profundo durante gestación.',
    conflict: 'Dolor emocional, vacío afectivo.',
    pairs: 'Pericardio (-) → Pulmón (+) | Plexo solar (-) → Riñón derecho (+)',
    benefits: 'Libera tensión torácica, mejora la capacidad respiratoria y la energía central.'
  },
  {
    id: 4,
    shock: 'Separación de la pareja o figura de sostén',
    description: 'Ausencia física/emocional de apoyo.',
    conflict: 'Abandono afectivo.',
    pairs: 'Plexo solar (-) → Riñón derecho (+) | Suprarrenal (-) → Plexo solar (+)',
    benefits: 'Aumenta sensación de amparo, estabiliza energía suprarrenal.'
  },
  {
    id: 5,
    shock: 'Violencia hacia la madre',
    description: 'Exposición a agresión verbal o física.',
    conflict: 'Miedo constante, inseguridad.',
    pairs: 'Temporal izq (-) → Temporal der (+) | Bulbo raquídeo (-) → Plexo solar (+)',
    benefits: 'Relaja sistema neurosensorial, reduce sobrecarga auditiva.'
  },
  {
    id: 6,
    shock: 'Accidente o caída de la madre',
    description: 'Evento físico con impacto.',
    conflict: 'Peligro vital súbito.',
    pairs: 'Bulbo raquídeo (-) → Suprarrenal (+) | Occipital (-) → Sacro (+)',
    benefits: 'Restablece coordinación neuro-músculo-esquelética y sensación de seguridad.'
  },
  {
    id: 7,
    shock: 'Hospitalización prolongada de la madre',
    description: 'Estancia en hospital durante gestación.',
    conflict: 'Privación de libertad, invasión médica.',
    pairs: 'Plexo solar (-) → Riñón izq (+) | Estómago (-) → Estómago (+)',
    benefits: 'Reduce tensión abdominal, mejora digestión y sensación de control.'
  },
  {
    id: 8,
    shock: 'Ruptura de pareja en embarazo',
    description: 'Fin de relación de pareja.',
    conflict: 'Pérdida de vínculo protector.',
    pairs: 'Suprarrenal (-) → Plexo solar (+) | Pericardio (-) → Pulmón (+)',
    benefits: 'Refuerza energía vital, apoya equilibrio emocional.'
  },
  {
    id: 9,
    shock: 'Inseguridad económica extrema',
    description: 'Carencia material o miedo a no cubrir necesidades.',
    conflict: 'Inestabilidad de recursos.',
    pairs: 'Plexo solar (-) → Riñón derecho (+) | Hígado (-) → Páncreas (+)',
    benefits: 'Aumenta sensación de autosuficiencia y confianza.'
  },
  {
    id: 10,
    shock: 'Embarazo no deseado',
    description: 'Rechazo inicial o conflicto con la llegada del bebé.',
    conflict: 'Falta de bienvenida.',
    pairs: 'Timo (-) → Suprarrenal (+) | Plexo solar (-) → Riñón izq (+)',
    benefits: 'Refuerza energía de aceptación y protección.'
  },
  {
    id: 11,
    shock: 'Enfermedad grave de la madre',
    description: 'Diagnóstico médico que amenaza su salud.',
    conflict: 'Miedo a morir y dejar solo al bebé.',
    pairs: 'Bulbo raquídeo (-) → Suprarrenal (+) | Corazón (-) → Suprarrenal (+)',
    benefits: 'Mejora regulación autonómica y fuerza vital.'
  },
  {
    id: 12,
    shock: 'Amenaza de parto prematuro',
    description: 'Contracciones o dilatación antes de tiempo.',
    conflict: 'Salida anticipada, falta de maduración.',
    pairs: 'Hipófisis (-) → Suprarrenal (+) | Plexo solar (-) → Riñón derecho (+)',
    benefits: 'Ayuda a estabilizar energía endocrina y vital.'
  },
  {
    id: 13,
    shock: 'Diagnóstico de malformación fetal',
    description: 'Confirmación de anomalía física.',
    conflict: 'Miedo y tristeza anticipada.',
    pairs: 'Timo (-) → Suprarrenal (+) | Pericardio (-) → Pulmón (+)',
    benefits: 'Favorece aceptación y reduce carga emocional.'
  },
  {
    id: 14,
    shock: 'Conflictos familiares intensos',
    description: 'Discusiones, rupturas, tensiones con familia.',
    conflict: 'Falta de red de apoyo.',
    pairs: 'Plexo solar (-) → Riñón derecho (+) | Temporal izq (-) → Temporal der (+)',
    benefits: 'Potencia resiliencia y equilibrio mental.'
  },
  {
    id: 15,
    shock: 'Embarazo tras pérdida anterior',
    description: 'Gestación después de aborto o muerte fetal.',
    conflict: 'Miedo recurrente a perder al bebé.',
    pairs: 'Suprarrenal (-) → Suprarrenal (+) | Pericardio (-) → Plexo solar (+)',
    benefits: 'Disminuye ansiedad anticipatoria.'
  },
  {
    id: 16,
    shock: 'Infección grave en embarazo',
    description: 'Enfermedad infecciosa con fiebre alta.',
    conflict: 'Amenaza directa a la vida fetal.',
    pairs: 'Bulbo raquídeo (-) → Suprarrenal (+) | Hígado (-) → Bazo (+)',
    benefits: 'Ayuda a recuperación energética.'
  },
  {
    id: 17,
    shock: 'Estrés laboral extremo',
    description: 'Sobrecarga física/mental durante embarazo.',
    conflict: 'Agotamiento y falta de descanso.',
    pairs: 'Suprarrenal (-) → Plexo solar (+) | Estómago (-) → Estómago (+)',
    benefits: 'Aumenta energía vital y calma mental.'
  },
  {
    id: 18,
    shock: 'Intervenciones médicas invasivas',
    description: 'Procedimientos dolorosos o agresivos.',
    conflict: 'Invasión corporal, pérdida de control.',
    pairs: 'Plexo solar (-) → Riñón derecho (+) | Bulbo raquídeo (-) → Plexo solar (+)',
    benefits: 'Reduce tensión somática.'
  },
  {
    id: 19,
    shock: 'Vivencia de catástrofe natural',
    description: 'Terremoto, inundación, incendio durante embarazo.',
    conflict: 'Miedo masivo, alerta constante.',
    pairs: 'Bulbo raquídeo (-) → Suprarrenal (+) | Temporal izq (-) → Temporal der (+)',
    benefits: 'Restaura seguridad y calma sensorial.'
  },
  {
    id: 20,
    shock: 'Aislamiento social extremo',
    description: 'Falta de contacto y soporte humano.',
    conflict: 'Soledad profunda.',
    pairs: 'Plexo solar (-) → Riñón izq (+) | Timo (-) → Plexo solar (+)',
    benefits: 'Refuerza sensación de conexión y apoyo.'
  },
];

export const KEY_POINTS_DATA: KeyPointData[] = [
    { point: 'Temporal derecho', resonance: 'Riñón derecho', benefit: 'Equilibra sistema nervioso fetal y tono muscular' },
    { point: 'Temporal izquierdo', resonance: 'Temporal derecho / Suprarrenal derecha', benefit: 'Armoniza hemisferios cerebrales, reduce sobrealerta' },
    { point: 'Frontal', resonance: 'Riñón derecho', benefit: 'Estabiliza eje HHA y disminuye hipervigilancia' },
    { point: 'Frontal izquierdo', resonance: 'Riñón izquierdo', benefit: 'Libera miedo anticipatorio y bloqueos emocionales' },
    { point: 'Occipital izquierdo', resonance: 'Sacro', benefit: 'Libera tensión espinal y mejora flujo placentario' },
    { point: 'Parietal derecho', resonance: 'Riñón izquierdo', benefit: 'Regula frecuencia cardíaca fetal y sensación de seguridad' },
    { point: 'Esternón', resonance: 'Hígado derecho', benefit: 'Disminuye carga emocional y mejora oxigenación fetal' },
    { point: 'Corazón', resonance: 'Suprarrenal izquierda / Hígado derecho', benefit: 'Fortalece vínculo madre-bebé' },
    { point: 'Suprarrenal derecha', resonance: 'Suprarrenal izquierda', benefit: 'Regula cortisol fetal y estrés materno' },
    { point: 'Suprarrenal izquierda', resonance: 'Suprarrenal derecha', benefit: 'Reduce hipertonía fetal' },
    { point: 'Pubis', resonance: 'Riñón derecho', benefit: 'Favorece tono uterino y flujo sanguíneo' },
    { point: 'Hipogastrio', resonance: 'Riñón izquierdo', benefit: 'Mejora irrigación abdominal y relajación' },
    { point: 'Hígado izquierdo', resonance: 'Estómago', benefit: 'Favorece detoxificación fetal' },
    { point: 'Estómago', resonance: 'Colon transverso', benefit: 'Mejora asimilación y microbiota fetal' },
    { point: 'Bazo', resonance: 'Riñón derecho', benefit: 'Refuerza defensa inmune' },
    { point: 'Lumbares', resonance: 'Riñón izquierdo', benefit: 'Reduce tensión lumbar-uterina y fatiga' },
];

export const CONDITIONS_DATA: ConditionData[] = [
  {
    id: 1,
    name: 'Cólicos del lactante',
    description: 'Espasmos intestinales, llanto inconsolable, abdomen distendido.',
    causes: 'Inmadurez digestiva, tensión en nervio frénico, disbiosis incipiente.',
    pairs: [
      'Estómago – Colon transverso → Mejora peristaltismo y digestión.',
      'Hígado derecho – Intestino delgado → Favorece metabolismo hepático.',
      'Bazo – Colon descendente → Regula inmunidad intestinal.'
    ]
  },
  {
    id: 2,
    name: 'Reflujo gastroesofágico',
    description: 'Regurgitación, arqueo del cuerpo, irritabilidad tras comer.',
    causes: 'Inmadurez del esfínter esofágico inferior, tensión diafragmática.',
    pairs: [
        'Hiato esofágico – Mismo punto → Relaja diafragma.',
        'Estómago – Cardias → Facilita cierre del esfínter.',
        'Frénico derecho – Estómago → Libera tensión nerviosa.'
    ]
  },
  {
    id: 3,
    name: 'Ictericia neonatal',
    description: 'Color amarillento en piel y mucosas por bilirrubina alta.',
    causes: 'Hígado inmaduro, lenta depuración de bilirrubina.',
    pairs: [
        'Hígado derecho – Hígado izquierdo → Estimula función hepática.',
        'Vesícula – Hígado derecho → Favorece flujo biliar.',
        'Riñón derecho – Riñón izquierdo → Apoya filtrado y eliminación.'
    ]
  },
  {
    id: 4,
    name: 'Dermatitis del recién nacido',
    description: 'Erupciones cutáneas, rojeces, irritación.',
    causes: 'Respuesta inflamatoria exagerada, toxinas acumuladas.',
    pairs: [
        'Bazo – Timo → Refuerza inmunidad.',
        'Hígado derecho – Estómago → Favorece detoxificación.',
        'Suprarrenal derecha – Suprarrenal izquierda → Modula inflamación.'
    ]
  },
  {
    id: 5,
    name: 'Infecciones respiratorias tempranas',
    description: 'Congestión nasal, respiración dificultosa.',
    causes: 'Baja inmunidad local, irritación de mucosas.',
    pairs: [
        'Senos frontales – Senos maxilares → Favorece drenaje.',
        'Pulmón derecho – Pulmón izquierdo → Optimiza oxigenación.',
        'Timo – Bazo → Refuerza defensas.'
    ]
  },
  {
    id: 6,
    name: 'Enfermedades exantemáticas congénitas',
    description: 'Erupciones, fiebre, malestar.',
    causes: 'Activación viral congénita, debilidad inmune.',
    pairs: [
        'Bazo – Timo → Refuerza inmunidad.',
        'Hígado derecho – Riñón derecho → Apoya depuración.',
        'Cervical alta derecha – Cervical alta izquierda → Modula respuesta neuroinmune.'
    ]
  },
  {
    id: 7,
    name: 'Estreñimiento funcional',
    description: 'Evacuaciones escasas o dolorosas.',
    causes: 'Lentitud intestinal, hidratación insuficiente.',
    pairs: [
        'Colon descendente – Colon ascendente → Favorece motilidad.',
        'Estómago – Colon transverso → Mejora digestión.',
        'Riñón derecho – Riñón izquierdo → Apoya hidratación.'
    ]
  }
];

export const POSTNATAL_SHOCKS_DATA: PostnatalShockData[] = [
  {
    id: 1,
    name: 'Separación madre-bebé',
    examples: [
      'Hospitalización del bebé.',
      'Trabajo materno precoz.',
      'Uso prolongado de incubadora.',
    ],
    physiologicalImpact: 'Elevación de cortisol y activación del eje HPA (hipotálamo–hipófisis–suprarrenales). Disminución de variabilidad cardíaca y tono vagal.',
    energeticImpact: 'Desconexión del campo cardíaco y del eje central. Mayor susceptibilidad a problemas digestivos y del sueño.',
    pairs: [
      'Corazón – Corazón (mismo punto) → Restablece coherencia cardíaca.',
      'Timo – Plexo solar → Regula ansiedad y sensación de vacío.',
    ],
  },
  {
    id: 2,
    name: 'Intervenciones médicas',
    examples: [
        'Vacunaciones.',
        'Procedimientos invasivos (catéter, punción).',
        'Hospitalización por fiebre o ictericia.',
    ],
    physiologicalImpact: 'Respuesta inflamatoria aguda. Memoria de dolor y tensión muscular.',
    energeticImpact: 'Microtraumas en el campo bioeléctrico. Bloqueo en meridianos relacionados con el sistema inmune.',
    pairs: [
      'Timo – Bazo → Potencia defensa inmune.',
      'Cervical alta derecha – Cervical alta izquierda → Reequilibra eje neuroinmune.',
    ]
  },
  {
    id: 3,
    name: 'Cambios en la alimentación',
    examples: [
      'Introducción de fórmula.',
      'Cambio de tipo de leche.',
      'Reducción de lactancia materna.',
    ],
    physiologicalImpact: 'Alteración en microbiota intestinal. Incremento de reflujo o estreñimiento.',
    energeticImpact: 'Bloqueo en puntos digestivos. Reducción en absorción energética de alimentos.',
    pairs: [
      'Estómago – Colon transverso → Facilita tránsito y reduce gases.',
      'Hígado derecho – Intestino delgado → Optimiza metabolización.',
    ],
  },
  {
    id: 4,
    name: 'Sobrecarga de estímulos',
    examples: [
      'Exposición a ruidos, luces fuertes, dispositivos electrónicos.',
      'Manipulación excesiva por varias personas.',
    ],
    physiologicalImpact: 'Hiperactivación simpática. Dificultad para conciliar el sueño.',
    energeticImpact: 'Dispersión del campo energético. Desbalance en eje frontal-occipital.',
    pairs: [
      'Frontal – Occipital → Calma sistema nervioso.',
      'Suprarrenal derecha – Suprarrenal izquierda → Modula respuesta al estrés.',
    ],
  },
];

export const PATHOLOGIES_DATA_1_3_MONTHS: PathologyData[] = [
    { pathology: 'Cólico prolongado', pairs: 'Estómago – Colon transverso', benefits: 'Mejora digestión y tránsito intestinal' },
    { pathology: 'Reflujo residual', pairs: 'Hiato esofágico – Hiato esofágico / Frénico derecho – Estómago', benefits: 'Reduce regurgitación y malestar' },
    { pathology: 'Dermatitis recurrente', pairs: 'Bazo – Timo / Hígado derecho – Estómago', benefits: 'Modula respuesta inflamatoria cutánea' },
    { pathology: 'Llanto inconsolable', pairs: 'Timo – Plexo solar / Corazón – Corazón', benefits: 'Reduce ansiedad y calma emocional' },
    { pathology: 'Estreñimiento', pairs: 'Colon descendente – Colon transverso', benefits: 'Facilita evacuación y reduce tensión abdominal' },
];

export const BABY_REGULATION_POINTS: KeyPointData[] = [
    // 🔵 PUNTOS BÁSICOS DE REGULACIÓN PARA BEBÉS (10 puntos)
    // Basados ÚNICAMENTE en las listas de rastreo existentes
    { point: 'Timo', resonance: 'Bazo', benefit: 'Regulación inmune y defensas naturales' },
    { point: 'Corazón', resonance: 'Suprarrenal izquierda', benefit: 'Fortalece vínculo madre-bebé y energía vital' },
    { point: 'Hígado derecho', resonance: 'Riñón derecho', benefit: 'Detoxificación y metabolismo' },
    { point: 'Estómago', resonance: 'Colon transverso', benefit: 'Digestión y absorción' },
    { point: 'Suprarrenal derecha', resonance: 'Suprarrenal izquierda', benefit: 'Regulación del estrés y cortisol' },
    { point: 'Temporal derecho', resonance: 'Riñón derecho', benefit: 'Equilibra sistema nervioso y tono muscular' },
    { point: 'Occipital izquierdo', resonance: 'Sacro', benefit: 'Libera tensión espinal y mejora flujo' },
    { point: 'Bazo', resonance: 'Riñón derecho', benefit: 'Refuerza defensa inmune' },
    { point: 'Frontal', resonance: 'Riñón derecho', benefit: 'Estabiliza eje HHA y disminuye hipervigilancia' },
    { point: 'Parietal derecho', resonance: 'Riñón izquierdo', benefit: 'Regula frecuencia cardíaca y sensación de seguridad' },
    
    // 🟢 PUNTOS ADICIONALES PARA REGULACIÓN COMPLETA (10 puntos)
    // Basados en KEY_POINTS_DATA y CONDITIONS_DATA existentes
    { point: 'Temporal izquierdo', resonance: 'Temporal derecho', benefit: 'Armoniza hemisferios cerebrales' },
    { point: 'Frontal izquierdo', resonance: 'Riñón izquierdo', benefit: 'Libera miedo anticipatorio' },
    { point: 'Esternón', resonance: 'Hígado derecho', benefit: 'Disminuye carga emocional' },
    { point: 'Suprarrenal izquierda', resonance: 'Suprarrenal derecha', benefit: 'Reduce hipertonía fetal' },
    { point: 'Pubis', resonance: 'Riñón derecho', benefit: 'Favorece tono uterino' },
    { point: 'Hipogastrio', resonance: 'Riñón izquierdo', benefit: 'Mejora irrigación abdominal' },
    { point: 'Hígado izquierdo', resonance: 'Estómago', benefit: 'Favorece detoxificación' },
    { point: 'Lumbares', resonance: 'Riñón izquierdo', benefit: 'Reduce tensión lumbar-uterina' },
    { point: 'Cervical alta derecha', resonance: 'Cervical alta izquierda', benefit: 'Modula respuesta neuroinmune' },
    { point: 'Pulmón derecho', resonance: 'Pulmón izquierdo', benefit: 'Optimiza oxigenación' },
    
    // 🟣 PUNTOS ESPECÍFICOS PARA BEBÉS (10 puntos)
    // Basados en pares biomagnéticos de CONDITIONS_DATA
    { point: 'Hiato esofágico', resonance: 'Hiato esofágico', benefit: 'Reflujo y tensión diafragmática' },
    { point: 'Frénico derecho', resonance: 'Estómago', benefit: 'Libera tensión nerviosa diafragmática' },
    { point: 'Vesícula', resonance: 'Hígado derecho', benefit: 'Favorece flujo biliar' },
    { point: 'Riñón derecho', resonance: 'Riñón izquierdo', benefit: 'Apoya filtrado y eliminación' },
    { point: 'Colon descendente', resonance: 'Colon ascendente', benefit: 'Favorece motilidad intestinal' },
    { point: 'Senos frontales', resonance: 'Senos maxilares', benefit: 'Favorece drenaje nasal' },
    { point: 'Bulbo raquídeo', resonance: 'Suprarrenal', benefit: 'Regula sistema nervioso autónomo' },
    { point: 'Pericardio', resonance: 'Pulmón', benefit: 'Libera tensión torácica' },
    { point: 'Plexo solar', resonance: 'Riñón derecho', benefit: 'Aumenta sensación de amparo' },
    { point: 'Cardias', resonance: 'Estómago', benefit: 'Facilita cierre del esfínter esofágico' }
];

export const MODULE2_CONFLICTS_DATA: Module2ConflictData[] = [
  {
    id: 1,
    conflict: 'Separación/Abandono',
    description: 'El bebé/niño experimenta separaciones bruscas o prolongadas de sus figuras de apego principales.',
    ageRange: '3 meses - 5 años',
    sensations: 'Llanto inconsolable, aferramiento extremo, regresiones del sueño, ansiedad ante despedidas, somatizaciones al anticipar separación.',
    pairs: 'Plexo Solar (-) → Riñón Derecho (+) | Pericardio (-) → Timo (+)',
    benefits: 'Restaura sensación de amparo y sostén familiar, reactiva capacidad de conexión afectiva.'
  },
  {
    id: 2,
    conflict: 'No ser escuchado/Invisibilidad',
    description: 'Sus señales comunicativas son ignoradas o malinterpretadas consistentemente.',
    ageRange: '6 meses - 5 años',
    sensations: 'Escalada de síntomas hasta obtener respuesta, berrinches intensos, mutismo selectivo, somatizaciones sin causa física, conductas disruptivas.',
    pairs: 'Temporal Izq (-) → Temporal Der (+) | Lengua (-) → Hioides (+)',
    benefits: 'Equilibra sobrecarga neurosensorial, facilita desarrollo del lenguaje expresivo, mejora comunicación.'
  },
  {
    id: 3,
    conflict: 'Territorio/Pérdida de control',
    description: 'Limitación extrema de su autonomía o cambios abruptos sin preparación.',
    ageRange: '18 meses - 5 años',
    sensations: 'Berrinches explosivos, negativismo extremo, autoagresión, demandas de control excesivo, rigidez en rutinas.',
    pairs: 'Hipotálamo (-) → Hipófisis (+) | Corteza Cingulada (-) → Insula (+)',
    benefits: 'Equilibra el eje HPA, mejora autorregulación emocional, restaura control personal saludable.'
  },
  {
    id: 4,
    conflict: 'Amenaza de supervivencia',
    description: 'Percepción de peligro vital directo o indirecto (accidentes, violencia, enfermedades graves).',
    ageRange: '3 meses - 5 años',
    sensations: 'Miedos extremos, fobias inexplicables, pánico ante separación, sobresaltos exagerados, regresiones marcadas.',
    pairs: 'Suprarrenal (-) → Suprarrenal (+) | Bulbo Raquídeo (-) → Suprarrenal (+)',
    benefits: 'Fortalece el eje vital, calma el sistema nervioso, regula respuesta autónoma al estrés.'
  },
  {
    id: 5,
    conflict: 'Desvalorización/No soy suficiente',
    description: 'Mensajes explícitos o implícitos de que no cumple expectativas o comparaciones desfavorables.',
    ageRange: '2 - 5 años',
    sensations: 'Inhibición extrema, perfeccionismo temprano, miedo al fracaso, autocastigo, retraimiento social.',
    pairs: 'Timo (-) → Bazo (+) | Pericardio (-) → Timo (+)',
    benefits: 'Fortalece sistema inmune emocional, activa motivación y autoestima, restaura iniciativa.'
  },
  {
    id: 6,
    conflict: 'Caos relacional/Doble mensaje',
    description: 'Inconsistencia extrema en cuidados o mensajes contradictorios de figuras de apego.',
    ageRange: '6 meses - 5 años',
    sensations: 'Patrones de apego desorganizado, movimientos estereotipados, disociación, alternancia entre hiper e hipoactivación.',
    pairs: 'Bulbo Raquídeo (-) → Suprarrenal (+) | Temporal Izq (-) → Temporal Der (+)',
    benefits: 'Integra sistemas de supervivencia y apego, regula respuesta al miedo y sobrecarga sensorial.'
  },
  {
    id: 7,
    conflict: 'Pérdida de base segura',
    description: 'Cambios drásticos en entorno o cuidadores primarios (mudanzas, divorcios, hospitalizaciones).',
    ageRange: '9 meses - 5 años',
    sensations: 'Inhibición exploratoria, aferramiento o evitación extrema, regresiones motoras, ansiedad generalizada.',
    pairs: 'Plexo Solar (-) → Riñón Derecho (+) | Suprarrenal (-) → Suprarrenal (+)',
    benefits: 'Restaura memoria de seguridad, fortalece sensación de amparo y estabilidad emocional.'
  },
  {
    id: 8,
    conflict: 'Invasión/Límites violados',
    description: 'Procedimientos médicos traumáticos, manipulación corporal brusca o abuso.',
    ageRange: '3 meses - 5 años',
    sensations: 'Hipervigilancia corporal, rechazo al contacto, somatizaciones específicas del área afectada, disociación corporal.',
    pairs: 'Pericardio (-) → Pulmón (+) | Bulbo Raquídeo (-) → Plexo Solar (+)',
    benefits: 'Restaura conciencia corporal saludable, integra experiencia traumática, mejora regulación emocional.'
  }
];