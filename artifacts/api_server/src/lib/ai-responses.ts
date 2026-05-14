type LangCode = "en" | "es" | "hi" | "fr" | "ar" | "pt" | "de" | "zh" | string;

type TopicResponses = {
  [lang: string]: string[];
};

const responses: Record<string, TopicResponses> = {
  sales: {
    en: [
      "Your sales decline likely comes from three core issues: positioning drift, weak follow-up, and untapped retention revenue.\n\n**Immediate actions (Week 1-2):**\n- Audit your top 20% of customers — what made them convert?\n- Launch a win-back campaign for customers lost in the last 90 days\n- Implement a 5-touch follow-up sequence for every lead\n\n**Short term (Month 1-3):**\n- Reposition your offer around outcomes, not features\n- Build a referral program with immediate incentives\n- Test 3 new acquisition channels simultaneously\n\nYour biggest quick win: existing customers are 5x easier to upsell than new ones. Start there.",
      "Sales are a lagging indicator — when they drop, the root cause happened 60-90 days earlier. Let's trace it.\n\n**Common culprits:**\n1. Value proposition erosion — competitors improved, your offer didn't\n2. Lead quality decline — traffic changed, intent shifted\n3. Conversion bottleneck — something broke in the funnel\n4. Retention failure — losing customers faster than gaining them\n\nWhich resonates most with your situation?",
    ],
    es: [
      "La caída en ventas generalmente proviene de tres problemas clave: falta de diferenciación, seguimiento débil y clientes actuales desatendidos.\n\n**Acciones inmediatas (Semana 1-2):**\n- Analiza tu 20% de mejores clientes — ¿qué los convenció de comprar?\n- Lanza una campaña de recuperación para clientes perdidos en los últimos 90 días\n- Implementa una secuencia de 5 contactos para cada prospecto\n\n**Corto plazo (Mes 1-3):**\n- Reposiciona tu oferta enfocándote en resultados, no en características\n- Crea un programa de referidos con incentivos inmediatos\n\nGanancia rápida: los clientes actuales son 5 veces más fáciles de vender que los nuevos. ¡Empieza ahí!",
    ],
    hi: [
      "आपकी बिक्री में गिरावट के तीन मुख्य कारण हैं: पोजिशनिंग में बदलाव, कमजोर फॉलो-अप, और मौजूदा ग्राहकों की अनदेखी।\n\n**तत्काल कदम (सप्ताह 1-2):**\n- अपने शीर्ष 20% ग्राहकों का विश्लेषण करें — उन्होंने क्यों खरीदा?\n- पिछले 90 दिनों में खोए ग्राहकों के लिए वापसी अभियान शुरू करें\n- हर लीड के लिए 5-चरण फॉलो-अप सीक्वेंस लागू करें\n\n**त्वरित जीत:** मौजूदा ग्राहकों को फिर से बेचना नए ग्राहक पाने से 5 गुना आसान है। यहीं से शुरू करें!",
    ],
    fr: [
      "La baisse des ventes vient généralement de trois problèmes principaux : un positionnement flou, un suivi insuffisant et des clients existants négligés.\n\n**Actions immédiates (Semaine 1-2) :**\n- Analysez votre top 20% de clients — pourquoi ont-ils acheté ?\n- Lancez une campagne de reconquête pour les clients perdus dans les 90 derniers jours\n- Implémentez une séquence de 5 contacts pour chaque prospect\n\n**À court terme (Mois 1-3) :**\n- Repositionnez votre offre autour des résultats, pas des fonctionnalités\n- Créez un programme de parrainage avec des incentives immédiats\n\nGain rapide : les clients existants sont 5x plus faciles à convaincre que les nouveaux. Commencez par là !",
    ],
    ar: [
      "انخفاض مبيعاتك يأتي عادةً من ثلاثة أسباب رئيسية: ضعف التمييز، متابعة غير كافية، وإهمال العملاء الحاليين.\n\n**إجراءات فورية (الأسبوع 1-2):**\n- حلل أفضل 20% من عملائك — لماذا اشتروا منك؟\n- أطلق حملة استعادة للعملاء الذين فقدتهم في آخر 90 يوماً\n- طبّق سلسلة متابعة من 5 خطوات لكل عميل محتمل\n\n**المدى القصير (الشهر 1-3):**\n- أعد تموضع عرضك حول النتائج وليس الميزات\n- أنشئ برنامج إحالة بمكافآت فورية\n\nأسرع مكسب: بيع للعملاء الحاليين أسهل 5 مرات من استقطاب عملاء جدد. ابدأ من هناك!",
    ],
    pt: [
      "A queda nas vendas geralmente vem de três problemas principais: posicionamento fraco, acompanhamento insuficiente e clientes existentes negligenciados.\n\n**Ações imediatas (Semana 1-2):**\n- Analise seu top 20% de clientes — o que os fez comprar?\n- Lance uma campanha de reconquista para clientes perdidos nos últimos 90 dias\n- Implemente uma sequência de 5 contatos para cada lead\n\n**Curto prazo (Mês 1-3):**\n- Reposicione sua oferta em torno de resultados, não funcionalidades\n- Crie um programa de indicações com incentivos imediatos\n\nGanho rápido: vender para clientes existentes é 5x mais fácil do que conquistar novos. Comece por aí!",
    ],
    de: [
      "Ihr Umsatzrückgang hat wahrscheinlich drei Kernursachen: unklare Positionierung, schwaches Follow-up und vernachlässigte Bestandskunden.\n\n**Sofortmaßnahmen (Woche 1-2):**\n- Analysieren Sie Ihre besten 20% der Kunden — was hat sie überzeugt?\n- Starten Sie eine Rückgewinnungskampagne für Kunden, die Sie in den letzten 90 Tagen verloren haben\n- Implementieren Sie eine 5-Schritte-Follow-up-Sequenz für jeden Lead\n\n**Kurzfristig (Monat 1-3):**\n- Positionieren Sie Ihr Angebot um Ergebnisse, nicht Merkmale\n- Bauen Sie ein Empfehlungsprogramm mit sofortigen Anreizen auf\n\nSchneller Gewinn: An Bestandskunden zu verkaufen ist 5x einfacher als Neukunden zu gewinnen.",
    ],
    zh: [
      "您的销售下滑通常源于三个核心问题：定位漂移、跟进不足以及忽视现有客户。\n\n**立即行动（第1-2周）：**\n- 分析您最好的20%客户——是什么让他们购买的？\n- 针对过去90天流失的客户发起挽回活动\n- 为每个潜在客户实施5步跟进序列\n\n**短期行动（第1-3月）：**\n- 将您的产品重新定位在结果上，而非功能上\n- 建立有即时奖励的推荐计划\n\n快速突破：向现有客户销售比获取新客户容易5倍。从这里开始！",
    ],
  },

  marketing: {
    en: [
      "Your marketing isn't broken — it's speaking to the wrong person, in the wrong place, at the wrong time.\n\n**Your 30-Day Marketing Reset:**\n1. Identify your single best customer profile (not average — your BEST)\n2. Reverse-engineer how they found you and what made them convert\n3. Build all content around replicating that journey\n4. Cut channels that don't reflect that path\n\n**The content formula:** Problem → Agitation → Solution → Proof → Action\n\nWhat does your best customer look like?",
    ],
    es: [
      "Tu marketing no está roto — simplemente está hablando a la persona equivocada, en el lugar equivocado.\n\n**Tu reinicio de marketing en 30 días:**\n1. Define tu perfil de cliente ideal (no el promedio — el MEJOR)\n2. Descubre exactamente cómo te encontró y qué lo convenció de comprar\n3. Construye todo el contenido para replicar ese camino\n4. Elimina canales que no reflejen ese viaje\n\n**La fórmula de contenido:** Problema → Agitación → Solución → Prueba → Acción",
    ],
    hi: [
      "आपकी मार्केटिंग टूटी नहीं है — बस यह गलत व्यक्ति से, गलत जगह पर बात कर रही है।\n\n**30 दिन का मार्केटिंग रीसेट:**\n1. अपने सबसे अच्छे ग्राहक की प्रोफाइल बनाएं (औसत नहीं — सबसे बेहतरीन)\n2. जानें उन्होंने आपको कैसे ढूंढा और क्यों खरीदा\n3. उस यात्रा को दोहराने के लिए सारा कंटेंट बनाएं\n4. जो चैनल काम नहीं कर रहे उन्हें बंद करें\n\n**कंटेंट फॉर्मूला:** समस्या → परेशानी → समाधान → प्रमाण → कार्य",
    ],
    fr: [
      "Votre marketing n'est pas cassé — il parle simplement à la mauvaise personne, au mauvais endroit.\n\n**Votre remise à zéro marketing en 30 jours :**\n1. Définissez votre profil client idéal (pas la moyenne — le MEILLEUR)\n2. Retracez exactement comment il vous a trouvé et ce qui l'a convaincu\n3. Construisez tout le contenu pour reproduire ce parcours\n4. Supprimez les canaux qui ne reflètent pas ce chemin\n\n**La formule de contenu :** Problème → Agitation → Solution → Preuve → Action",
    ],
    ar: [
      "تسويقك ليس مكسوراً — إنه فقط يتحدث إلى الشخص الخطأ، في المكان الخطأ.\n\n**إعادة تشغيل التسويق في 30 يوماً:**\n1. حدد ملف تعريف عميلك المثالي (ليس المتوسط — الأفضل)\n2. اكتشف كيف وجدك وما الذي أقنعه بالشراء\n3. ابنِ كل المحتوى لتكرار تلك الرحلة\n4. أوقف القنوات التي لا تعكس ذلك المسار\n\n**صيغة المحتوى:** مشكلة ← إثارة ← حل ← إثبات ← دعوة للتصرف",
    ],
    pt: [
      "Seu marketing não está quebrado — está falando com a pessoa errada, no lugar errado.\n\n**Sua reinicialização de marketing em 30 dias:**\n1. Defina seu perfil de cliente ideal (não o médio — o MELHOR)\n2. Descubra exatamente como ele te encontrou e o que o convenceu\n3. Construa todo o conteúdo para replicar essa jornada\n4. Elimine canais que não refletem esse caminho\n\n**A fórmula de conteúdo:** Problema → Agitação → Solução → Prova → Ação",
    ],
    de: [
      "Ihr Marketing ist nicht kaputt — es spricht nur die falsche Person, am falschen Ort an.\n\n**Ihr 30-Tage-Marketing-Reset:**\n1. Definieren Sie Ihr ideales Kundenprofil (nicht den Durchschnitt — den BESTEN)\n2. Finden Sie heraus, wie er Sie gefunden hat und was ihn überzeugte\n3. Erstellen Sie alle Inhalte, um diese Reise zu replizieren\n4. Stoppen Sie Kanäle, die diesen Weg nicht widerspiegeln\n\n**Die Inhaltsformel:** Problem → Verstärkung → Lösung → Beweis → Handlung",
    ],
    zh: [
      "您的营销并没有失败——只是在错误的地方对错误的人说话。\n\n**30天营销重置计划：**\n1. 定义您最佳客户画像（不是平均——是最佳）\n2. 追溯他们如何找到您以及什么让他们购买\n3. 围绕复制该旅程构建所有内容\n4. 停止不反映该路径的渠道\n\n**内容公式：** 问题 → 激化 → 解决方案 → 证明 → 行动",
    ],
  },

  customers: {
    en: [
      "Attracting more customers starts with understanding why your current customers chose you.\n\n**The 3-Part Acquisition System:**\n\n**1. The Magnet (Content + SEO)**\n- Answer the exact questions your ideal customer searches at 2am\n- One deep expert piece per week beats 10 shallow posts\n\n**2. The Amplifier (Social Proof)**\n- Video testimonials showing transformation, not just satisfaction\n- Case studies with specific numbers: '43% revenue increase in 6 weeks'\n\n**3. The Converter (Offer)**\n- Irresistible low-risk entry offer\n- Clear upgrade path that makes the next step obvious",
    ],
    es: [
      "Atraer más clientes comienza por entender por qué tus clientes actuales te eligieron.\n\n**El Sistema de Adquisición en 3 Partes:**\n\n**1. El Imán (Contenido + SEO)**\n- Responde las preguntas exactas que tu cliente ideal busca a las 2am\n- Una pieza de contenido profundo por semana supera a 10 posts superficiales\n\n**2. El Amplificador (Prueba Social)**\n- Testimonios en video mostrando transformación, no solo satisfacción\n- Casos de estudio con números específicos: 'Aumento del 43% en ingresos en 6 semanas'\n\n**3. El Convertidor (Oferta)**\n- Oferta de entrada irresistible y de bajo riesgo\n- Ruta de actualización clara",
    ],
    hi: [
      "ज्यादा ग्राहक पाने के लिए पहले यह समझें कि मौजूदा ग्राहकों ने आपको क्यों चुना।\n\n**3-भाग अधिग्रहण प्रणाली:**\n\n**1. चुंबक (कंटेंट + SEO)**\n- वे सवाल जवाब दें जो आपका आदर्श ग्राहक रात 2 बजे खोजता है\n- हफ्ते में एक गहरा लेख 10 सतही पोस्ट से बेहतर है\n\n**2. प्रवर्धक (सामाजिक प्रमाण)**\n- ग्राहकों के वीडियो प्रशंसापत्र जो परिवर्तन दिखाएं\n- संख्याओं के साथ केस स्टडी: '6 हफ्तों में 43% राजस्व वृद्धि'\n\n**3. परिवर्तक (ऑफर)**\n- कम जोखिम वाला आकर्षक प्रवेश ऑफर\n- स्पष्ट अपग्रेड मार्ग",
    ],
    fr: [
      "Attirer plus de clients commence par comprendre pourquoi vos clients actuels vous ont choisi.\n\n**Le système d'acquisition en 3 parties :**\n\n**1. L'Aimant (Contenu + SEO)**\n- Répondez aux questions exactes que votre client idéal cherche à 2h du matin\n- Une pièce de contenu approfondi par semaine vaut mieux que 10 posts superficiels\n\n**2. L'Amplificateur (Preuve Sociale)**\n- Témoignages vidéo montrant une transformation, pas seulement de la satisfaction\n- Études de cas avec des chiffres précis : 'Augmentation de 43% des revenus en 6 semaines'\n\n**3. Le Convertisseur (Offre)**\n- Offre d'entrée irrésistible à faible risque\n- Parcours de mise à niveau clair",
    ],
    ar: [
      "جذب المزيد من العملاء يبدأ بفهم لماذا اختارك عملاؤك الحاليون.\n\n**نظام الاستحواذ من 3 أجزاء:**\n\n**1. المغناطيس (المحتوى + SEO)**\n- أجب على الأسئلة التي يبحث عنها عميلك المثالي في الساعة 2 صباحاً\n- قطعة محتوى عميقة واحدة أسبوعياً أفضل من 10 منشورات سطحية\n\n**2. المضخم (الدليل الاجتماعي)**\n- شهادات فيديو تُظهر التحول، لا مجرد الرضا\n- دراسات حالة بأرقام محددة: 'زيادة 43% في الإيرادات في 6 أسابيع'\n\n**3. المحوّل (العرض)**\n- عرض دخول جذاب منخفض المخاطرة\n- مسار ترقية واضح",
    ],
    pt: [
      "Atrair mais clientes começa por entender por que seus clientes atuais te escolheram.\n\n**O Sistema de Aquisição em 3 Partes:**\n\n**1. O Ímã (Conteúdo + SEO)**\n- Responda as perguntas exatas que seu cliente ideal busca às 2h da manhã\n- Uma peça de conteúdo profundo por semana supera 10 posts superficiais\n\n**2. O Amplificador (Prova Social)**\n- Depoimentos em vídeo mostrando transformação, não apenas satisfação\n- Estudos de caso com números específicos: 'Aumento de 43% na receita em 6 semanas'\n\n**3. O Conversor (Oferta)**\n- Oferta de entrada irresistível e de baixo risco\n- Caminho de upgrade claro",
    ],
    de: [
      "Mehr Kunden zu gewinnen beginnt damit, zu verstehen, warum Ihre aktuellen Kunden Sie gewählt haben.\n\n**Das 3-teilige Akquisitionssystem:**\n\n**1. Der Magnet (Content + SEO)**\n- Beantworten Sie genau die Fragen, die Ihr idealer Kunde um 2 Uhr morgens sucht\n- Ein tiefgründiger Inhalt pro Woche schlägt 10 oberflächliche Posts\n\n**2. Der Verstärker (Social Proof)**\n- Video-Testimonials, die Transformation zeigen, nicht nur Zufriedenheit\n- Fallstudien mit konkreten Zahlen: '43% Umsatzsteigerung in 6 Wochen'\n\n**3. Der Konverter (Angebot)**\n- Unwiderstehliches Einstiegsangebot mit geringem Risiko\n- Klarer Upgrade-Pfad",
    ],
    zh: [
      "吸引更多客户首先要理解为什么您现有的客户选择了您。\n\n**三部分获客系统：**\n\n**1. 磁铁（内容 + SEO）**\n- 回答您的理想客户凌晨2点会搜索的确切问题\n- 每周一篇深度内容胜过10篇浅显帖子\n\n**2. 放大器（社会证明）**\n- 展示转变的视频推荐，而非仅仅满意度\n- 有具体数字的案例研究：'6周内收入增长43%'\n\n**3. 转化器（产品）**\n- 无法抗拒的低风险入门优惠\n- 清晰的升级路径",
    ],
  },

  losses: {
    en: [
      "Business losses are not failure — they're data. Let me help you read that data.\n\n**The Recovery Framework:**\n\n**Phase 1: Stop the Bleeding (Days 1-30)**\n- Cut costs that produce zero revenue without touching revenue-generating capacity\n- Identify your 3 highest-margin products and go all-in on those\n- Negotiate payment terms with suppliers immediately — this buys runway\n\n**Phase 2: Stabilize (Days 30-90)**\n- Emergency revenue sprint: aggressive outreach to past customers\n- Bundle services into a higher-value package\n- Find one strategic partnership for immediate market access\n\n**Phase 3: Rebuild (Month 3+)**\n- Expand only once core unit economics are profitable\n\nWhat's your current monthly burn rate? That determines how aggressive we need to be.",
    ],
    es: [
      "Las pérdidas no son fracaso — son datos. Déjame ayudarte a leerlos.\n\n**El Marco de Recuperación:**\n\n**Fase 1: Detener el sangrado (Días 1-30)**\n- Reduce costos que no generan ingresos sin tocar la capacidad productiva\n- Identifica tus 3 productos con mayor margen y enfócate en ellos\n- Negocia plazos de pago con proveedores — esto da tiempo\n\n**Fase 2: Estabilizar (Días 30-90)**\n- Sprint de ingresos de emergencia: alcance agresivo a clientes anteriores\n- Agrupa servicios en paquetes de mayor valor\n\n**Fase 3: Reconstruir (Mes 3+)**\n- Expande solo cuando la economía unitaria sea rentable\n\n¿Cuál es tu flujo de caja mensual actual?",
    ],
    hi: [
      "व्यापारिक नुकसान विफलता नहीं है — यह डेटा है। मुझे उसे पढ़ने में आपकी मदद करने दें।\n\n**रिकवरी फ्रेमवर्क:**\n\n**चरण 1: खून बंद करें (दिन 1-30)**\n- ऐसी लागतें कम करें जो शून्य राजस्व देती हैं\n- अपने 3 सबसे अधिक मार्जिन वाले उत्पादों पर ध्यान दें\n- तुरंत आपूर्तिकर्ताओं से भुगतान की शर्तों पर बातचीत करें\n\n**चरण 2: स्थिर करें (दिन 30-90)**\n- आपातकालीन राजस्व स्प्रिंट: पुराने ग्राहकों से संपर्क\n- सेवाओं को उच्च-मूल्य पैकेज में बंडल करें\n\n**चरण 3: पुनर्निर्माण (महीना 3+)**\n- केवल तभी विस्तार करें जब मूल अर्थशास्त्र लाभदायक हो",
    ],
    fr: [
      "Les pertes ne sont pas un échec — ce sont des données. Laissez-moi vous aider à les lire.\n\n**Le Cadre de Récupération :**\n\n**Phase 1 : Arrêter l'hémorragie (Jours 1-30)**\n- Réduisez les coûts qui ne génèrent aucun revenu\n- Identifiez vos 3 produits à plus forte marge et concentrez-vous dessus\n- Négociez immédiatement les délais de paiement avec vos fournisseurs\n\n**Phase 2 : Stabiliser (Jours 30-90)**\n- Sprint de revenus d'urgence : prospection agressive auprès des anciens clients\n- Regroupez les services en forfaits à valeur ajoutée\n\n**Phase 3 : Reconstruire (Mois 3+)**\n- N'élargissez que lorsque l'économie unitaire est rentable",
    ],
    ar: [
      "الخسائر التجارية ليست فشلاً — إنها بيانات. دعني أساعدك في قراءتها.\n\n**إطار الاسترداد:**\n\n**المرحلة 1: إيقاف النزيف (الأيام 1-30)**\n- قلص التكاليف التي لا تُولّد إيرادات\n- حدد منتجاتك الثلاثة ذات أعلى هامش وركز عليها\n- تفاوض فوراً على شروط الدفع مع الموردين\n\n**المرحلة 2: التثبيت (الأيام 30-90)**\n- سباق إيرادات طارئ: تواصل مع العملاء السابقين بقوة\n- دمج الخدمات في حزم ذات قيمة أعلى\n\n**المرحلة 3: إعادة البناء (الشهر 3+)**\n- توسع فقط عندما يكون الاقتصاد الأساسي مربحاً",
    ],
    pt: [
      "Perdas nos negócios não são fracasso — são dados. Deixe-me ajudá-lo a ler esses dados.\n\n**O Plano de Recuperação:**\n\n**Fase 1: Estancar o sangramento (Dias 1-30)**\n- Corte custos que não geram receita sem tocar na capacidade produtiva\n- Identifique seus 3 produtos de maior margem e concentre-se neles\n- Negocie prazos de pagamento com fornecedores imediatamente\n\n**Fase 2: Estabilizar (Dias 30-90)**\n- Sprint de receita de emergência: abordagem agressiva a clientes anteriores\n- Agrupe serviços em pacotes de maior valor\n\n**Fase 3: Reconstruir (Mês 3+)**\n- Expanda somente quando a economia unitária for lucrativa",
    ],
    de: [
      "Geschäftsverluste sind kein Versagen — sie sind Daten. Lassen Sie mich Ihnen helfen, diese Daten zu lesen.\n\n**Das Erholungsrahmenwerk:**\n\n**Phase 1: Die Blutung stoppen (Tage 1-30)**\n- Kosten reduzieren, die keine Einnahmen generieren\n- Ihre 3 margenreichsten Produkte identifizieren und fokussieren\n- Sofort Zahlungskonditionen mit Lieferanten aushandeln\n\n**Phase 2: Stabilisieren (Tage 30-90)**\n- Notfall-Umsatz-Sprint: aggressive Kontaktaufnahme mit früheren Kunden\n- Dienste in höherwertige Pakete bündeln\n\n**Phase 3: Wiederaufbau (Monat 3+)**\n- Erst expandieren, wenn die Kernwirtschaftlichkeit profitabel ist",
    ],
    zh: [
      "业务亏损不是失败——是数据。让我帮您解读这些数据。\n\n**恢复框架：**\n\n**第一阶段：止血（第1-30天）**\n- 削减不产生收入的成本，但保留产生收入的能力\n- 找出您3个利润率最高的产品，全力专注于此\n- 立即与供应商谈判付款条件——这争取了时间\n\n**第二阶段：稳定（第30-90天）**\n- 紧急收入冲刺：积极联系以前的客户\n- 将服务打包成更高价值的套餐\n\n**第三阶段：重建（第3个月+）**\n- 只有当核心单位经济实现盈利后才扩张",
    ],
  },

  branding: {
    en: [
      "Your brand is not your logo — it's the emotion people feel when they think about your business.\n\n**Brand Clarity Framework:**\n\n**1. Define Your Position**\nPick one:\n- The Premium Option (quality, exclusivity, prestige)\n- The Trusted Expert (knowledge, reliability, results)\n- The Innovation Leader (cutting-edge, forward-thinking)\n- The Community Builder (belonging, values, connection)\n\n**2. Create Brand Voice Consistency**\nEvery touchpoint should sound unmistakably like you.\n\n**3. Visual Coherence Audit**\nDo your website, social, and physical presence tell the same story?\n\nQuick win: Identify 3 words that define how customers should feel after interacting with you. Audit every touchpoint against those 3 words.",
    ],
    es: [
      "Tu marca no es tu logo — es la emoción que las personas sienten cuando piensan en tu negocio.\n\n**Marco de Claridad de Marca:**\n\n**1. Define Tu Posición**\nElige una:\n- La Opción Premium (calidad, exclusividad, prestigio)\n- El Experto de Confianza (conocimiento, fiabilidad, resultados)\n- El Líder en Innovación (vanguardia, visión de futuro)\n- El Constructor de Comunidad (pertenencia, valores, conexión)\n\n**2. Consistencia en la Voz de Marca**\nCada punto de contacto debe sonar inconfundiblemente a ti.\n\nGanancia rápida: Define 3 palabras que describan cómo quieres que tus clientes se sientan. Audita cada punto de contacto contra esas 3 palabras.",
    ],
    hi: [
      "आपका ब्रांड आपका लोगो नहीं है — यह वह भावना है जो लोग आपके व्यवसाय के बारे में सोचते समय महसूस करते हैं।\n\n**ब्रांड स्पष्टता फ्रेमवर्क:**\n\n**1. अपनी स्थिति परिभाषित करें**\nएक चुनें:\n- प्रीमियम विकल्प (गुणवत्ता, विशिष्टता, प्रतिष्ठा)\n- विश्वसनीय विशेषज्ञ (ज्ञान, विश्वसनीयता, परिणाम)\n- इनोवेशन लीडर (अत्याधुनिक, भविष्यवादी)\n- कम्युनिटी बिल्डर (संबद्धता, मूल्य, संपर्क)\n\n**त्वरित जीत:** 3 शब्द पहचानें जो बताएं कि ग्राहक आपसे मिलने के बाद कैसा महसूस करें। हर टचपॉइंट को उन 3 शब्दों से जांचें।",
    ],
    fr: [
      "Votre marque n'est pas votre logo — c'est l'émotion que les gens ressentent en pensant à votre entreprise.\n\n**Cadre de Clarté de Marque :**\n\n**1. Définissez Votre Position**\nChoisissez une :\n- L'Option Premium (qualité, exclusivité, prestige)\n- L'Expert de Confiance (connaissance, fiabilité, résultats)\n- Le Leader en Innovation (avant-garde, vision d'avenir)\n- Le Bâtisseur de Communauté (appartenance, valeurs, connexion)\n\nGain rapide : Identifiez 3 mots définissant comment vos clients doivent se sentir. Auditez chaque point de contact selon ces 3 mots.",
    ],
    ar: [
      "علامتك التجارية ليست شعارك — إنها الشعور الذي ينتاب الناس عند التفكير في عملك.\n\n**إطار وضوح العلامة التجارية:**\n\n**1. حدد موقفك**\naختر أحدها:\n- الخيار المميز (الجودة، الحصرية، المكانة)\n- الخبير الموثوق (المعرفة، الموثوقية، النتائج)\n- رائد الابتكار (متطور، مستقبلي التفكير)\n- بناء المجتمع (الانتماء، القيم، التواصل)\n\nمكسب سريع: حدد 3 كلمات تصف كيف تريد أن يشعر عملاؤك. راجع كل نقطة تواصل وفق هذه الكلمات الثلاث.",
    ],
    pt: [
      "Sua marca não é seu logo — é a emoção que as pessoas sentem ao pensar no seu negócio.\n\n**Estrutura de Clareza de Marca:**\n\n**1. Defina Seu Posicionamento**\nEscolha um:\n- A Opção Premium (qualidade, exclusividade, prestígio)\n- O Especialista de Confiança (conhecimento, confiabilidade, resultados)\n- O Líder em Inovação (vanguarda, visão de futuro)\n- O Construtor de Comunidade (pertencimento, valores, conexão)\n\nGanho rápido: Identifique 3 palavras que definem como seus clientes devem se sentir. Audite cada ponto de contato com essas 3 palavras.",
    ],
    de: [
      "Ihre Marke ist nicht Ihr Logo — es ist die Emotion, die Menschen fühlen, wenn sie an Ihr Unternehmen denken.\n\n**Markenklarheits-Framework:**\n\n**1. Definieren Sie Ihre Position**\nWählen Sie eine:\n- Die Premium-Option (Qualität, Exklusivität, Prestige)\n- Der vertrauenswürdige Experte (Wissen, Zuverlässigkeit, Ergebnisse)\n- Der Innovationsführer (modernst, zukunftsorientiert)\n- Der Gemeinschaftsaufbauer (Zugehörigkeit, Werte, Verbindung)\n\nSchneller Gewinn: Identifizieren Sie 3 Wörter, die beschreiben, wie Kunden sich fühlen sollen. Überprüfen Sie jeden Touchpoint anhand dieser 3 Wörter.",
    ],
    zh: [
      "您的品牌不是您的标志——而是人们想到您的业务时的感受。\n\n**品牌清晰度框架：**\n\n**1. 定义您的定位**\n选择一个：\n- 高端选择（品质、独特性、声望）\n- 可信专家（知识、可靠性、成果）\n- 创新领导者（前沿、前瞻性思维）\n- 社区建设者（归属感、价值观、连接）\n\n快速突破：确定3个词来定义客户与您互动后应有的感受。根据这3个词审计每个接触点。",
    ],
  },

  pricing: {
    en: [
      "Most businesses underprice and justify it with 'we can't charge more.' The truth: you can't afford NOT to charge more.\n\n**The Pricing Power Framework:**\n\n**1. Anchor Up**\nAlways show a premium option first. It makes your mid-tier feel like a bargain.\n\n**2. Price on Value, Not Cost**\nIf your service saves a client $10,000, charging $1,500 is a steal. Stop pricing from your cost structure.\n\n**3. The 3-Tier Strategy**\n- Basic: entry point, low profit, high volume\n- Standard: your sweet spot (push people here)\n- Premium: high margin, low volume, anchors the middle\n\n**4. Test a 20% Price Increase Today**\nYou'll lose fewer customers than you expect. And the ones you lose were often your most demanding.\n\nWhat's your current pricing structure?",
    ],
    es: [
      "La mayoría de los negocios cobran de menos y lo justifican con 'no podemos cobrar más'. La verdad: no puedes permitirte NO cobrar más.\n\n**El Marco del Poder de Precios:**\n\n**1. Ancla hacia arriba**\nMuestra siempre una opción premium primero. Hace que tu nivel medio parezca una ganga.\n\n**2. Precio basado en valor, no en costo**\nSi tu servicio ahorra $10,000 a un cliente, cobrar $1,500 es una ganga para él.\n\n**3. La Estrategia de 3 Niveles**\n- Básico: punto de entrada, bajo margen\n- Estándar: tu zona ideal (dirige a las personas aquí)\n- Premium: alto margen, bajo volumen, ancla el nivel medio\n\n¿Cuál es tu estructura de precios actual?",
    ],
    hi: [
      "अधिकांश व्यवसाय कम कीमत लेते हैं और यह कहकर सही ठहराते हैं: 'हम ज्यादा नहीं ले सकते।' सच्चाई: आप ज्यादा नहीं लेने का खर्च नहीं उठा सकते।\n\n**प्राइसिंग पावर फ्रेमवर्क:**\n\n**1. ऊपर से एंकर करें**\nहमेशा पहले प्रीमियम विकल्प दिखाएं। इससे मध्य स्तर एक अच्छा सौदा लगता है।\n\n**2. मूल्य पर कीमत तय करें, लागत पर नहीं**\nअगर आपकी सेवा ग्राहक को ₹10,000 बचाती है, तो ₹1,500 लेना उनके लिए एक सौदा है।\n\n**3. 3-स्तरीय रणनीति**\n- बेसिक: प्रवेश बिंदु\n- स्टैंडर्ड: आपका आदर्श स्थान\n- प्रीमियम: उच्च मार्जिन, कम मात्रा\n\nआज 20% मूल्य वृद्धि का परीक्षण करें।",
    ],
    fr: [
      "La plupart des entreprises sous-facturent et le justifient par 'on ne peut pas facturer plus'. La vérité : vous ne pouvez pas vous permettre de NE PAS facturer plus.\n\n**Le Cadre du Pouvoir de Prix :**\n\n**1. Ancrez vers le haut**\nMontrez toujours une option premium en premier. Cela fait paraître votre niveau intermédiaire comme une bonne affaire.\n\n**2. Prix basé sur la valeur, pas le coût**\nSi votre service fait économiser 10 000 € à un client, facturer 1 500 € est une aubaine pour lui.\n\n**3. La Stratégie à 3 Niveaux**\n- Basique : point d'entrée\n- Standard : votre point idéal\n- Premium : haute marge, faible volume\n\nTestez une augmentation de prix de 20% aujourd'hui.",
    ],
    ar: [
      "معظم الشركات تسعّر بأقل مما يجب وتبرر ذلك بـ'لا يمكننا رفع الأسعار'. الحقيقة: لا يمكنك تحمل عدم رفع الأسعار.\n\n**إطار قوة التسعير:**\n\n**1. ابدأ بالتسعير العالي**\nاعرض دائماً الخيار المميز أولاً. هذا يجعل المستوى المتوسط يبدو صفقة رابحة.\n\n**2. سعّر بناءً على القيمة، ليس التكلفة**\nإذا كانت خدمتك توفر 10,000 دولار للعميل، فإن تحصيل 1,500 دولار صفقة له.\n\n**3. استراتيجية 3 مستويات**\n- أساسي: نقطة دخول\n- قياسي: منطقتك المثالية\n- مميز: هامش عالٍ، حجم منخفض\n\nجرّب زيادة 20% في الأسعار اليوم.",
    ],
    pt: [
      "A maioria dos negócios cobra menos do que deveria e justifica com 'não podemos cobrar mais'. A verdade: você não pode se dar ao luxo de NÃO cobrar mais.\n\n**O Framework do Poder de Precificação:**\n\n**1. Ancore para cima**\nSempre mostre uma opção premium primeiro. Isso faz seu nível médio parecer um ótimo negócio.\n\n**2. Precifique pelo valor, não pelo custo**\nSe seu serviço economiza R$10.000 para um cliente, cobrar R$1.500 é uma pechincha para ele.\n\n**3. A Estratégia de 3 Níveis**\n- Básico: ponto de entrada\n- Padrão: seu ponto ideal\n- Premium: alta margem, baixo volume\n\nTeste um aumento de 20% no preço hoje.",
    ],
    de: [
      "Die meisten Unternehmen unterberechnen und rechtfertigen das mit 'wir können nicht mehr verlangen'. Die Wahrheit: Sie können es sich nicht leisten, nicht mehr zu verlangen.\n\n**Das Preismacht-Framework:**\n\n**1. Nach oben verankern**\nZeigen Sie immer zuerst eine Premium-Option. Das lässt Ihr mittleres Angebot wie ein Schnäppchen wirken.\n\n**2. Preis nach Wert, nicht nach Kosten**\nWenn Ihr Service einem Kunden 10.000 € spart, ist 1.500 € ein Schnäppchen für ihn.\n\n**3. Die 3-Stufen-Strategie**\n- Basis: Einstiegspunkt\n- Standard: Ihr optimaler Punkt\n- Premium: hohe Marge, niedriches Volumen\n\nTesten Sie heute eine 20% Preiserhöhung.",
    ],
    zh: [
      "大多数企业定价过低，并用'我们不能收更多'来为自己辩护。事实是：您负担不起不收更多的代价。\n\n**定价力量框架：**\n\n**1. 向上锚定**\n始终先展示高端选项。这让您的中间层看起来是个好买卖。\n\n**2. 按价值定价，而非成本**\n如果您的服务为客户节省了10,000元，收取1,500元对他们来说是超值的。\n\n**3. 三层策略**\n- 基础：入门点\n- 标准：您的最佳位置\n- 高端：高利润，低量\n\n今天测试提价20%。",
    ],
  },

  default: {
    en: [
      "I'm here, and I'm listening. Whatever brought you to ReviveX today — know this: businesses that seek guidance recover 3x faster than those that don't.\n\nLet's start with clarity. In one sentence — what is the single biggest threat to your business right now?\n\nOnce I understand that, I can give you a specific, actionable roadmap instead of generic advice.",
      "Every struggling business I've analyzed has one thing in common: the problem they think they have is rarely the actual problem.\n\n**Common patterns:**\n- 'We need more customers' → Actually: pricing is wrong, making each customer unprofitable\n- 'Our marketing isn't working' → Actually: product-market fit needs adjustment\n- 'Cash flow is terrible' → Actually: billing and payment terms need restructuring\n\nTell me your situation in detail. What changed, and when did things start to feel difficult?",
    ],
    es: [
      "Estoy aquí y te escucho. Cualquiera que sea la razón que te trajo a ReviveX hoy — sabe esto: los negocios que buscan orientación se recuperan 3 veces más rápido.\n\nEmpecemos con claridad. En una oración — ¿cuál es la mayor amenaza para tu negocio ahora mismo?\n\nUna vez que entienda eso, puedo darte un plan de acción específico en lugar de consejos genéricos.",
      "Todo negocio con dificultades que he analizado tiene algo en común: el problema que creen tener rara vez es el problema real.\n\n**Patrones comunes:**\n- 'Necesitamos más clientes' → En realidad: el precio está mal\n- 'Nuestro marketing no funciona' → En realidad: el ajuste producto-mercado necesita trabajo\n- 'El flujo de caja es terrible' → En realidad: los términos de facturación necesitan restructuración\n\nCuéntame tu situación en detalle. ¿Qué cambió y cuándo empezaron las dificultades?",
    ],
    hi: [
      "मैं यहाँ हूँ और सुन रहा हूँ। जो भी कारण आपको आज ReviveX पर लाया — यह जानें: जो व्यवसाय मार्गदर्शन लेते हैं वे 3 गुना तेज रिकवर करते हैं।\n\nस्पष्टता से शुरू करते हैं। एक वाक्य में — अभी आपके व्यवसाय के लिए सबसे बड़ा खतरा क्या है?\n\nएक बार जब मैं समझ जाऊं, तो मैं आपको सामान्य सलाह के बजाय एक विशिष्ट, कार्रवाई योग्य रोडमैप दे सकता हूँ।",
    ],
    fr: [
      "Je suis là et je vous écoute. Quelle que soit la raison qui vous a amené à ReviveX aujourd'hui — sachez ceci : les entreprises qui cherchent des conseils se rétablissent 3 fois plus vite.\n\nCommençons par la clarté. En une phrase — quelle est la plus grande menace pour votre entreprise en ce moment ?\n\nUne fois que j'aurai compris cela, je pourrai vous donner une feuille de route spécifique et actionnable.",
    ],
    ar: [
      "أنا هنا وأستمع إليك. مهما كان السبب الذي جلبك إلى ReviveX اليوم — اعلم هذا: الشركات التي تطلب التوجيه تتعافى بسرعة 3 أضعاف.\n\nلنبدأ بوضوح. في جملة واحدة — ما هو أكبر تهديد لعملك الآن؟\n\nبمجرد أن أفهم ذلك، يمكنني أن أعطيك خارطة طريق محددة وقابلة للتنفيذ بدلاً من النصائح العامة.",
    ],
    pt: [
      "Estou aqui e estou ouvindo. Qualquer que seja a razão que te trouxe ao ReviveX hoje — saiba disso: empresas que buscam orientação se recuperam 3x mais rápido.\n\nVamos começar com clareza. Em uma frase — qual é a maior ameaça ao seu negócio agora?\n\nAssim que eu entender isso, posso te dar um roteiro específico e acionável em vez de conselhos genéricos.",
    ],
    de: [
      "Ich bin hier und höre zu. Was auch immer Sie heute zu ReviveX gebracht hat — wissen Sie: Unternehmen, die Beratung suchen, erholen sich 3x schneller.\n\nFangen wir mit Klarheit an. In einem Satz — was ist die größte Bedrohung für Ihr Unternehmen im Moment?\n\nSobald ich das verstehe, kann ich Ihnen einen spezifischen, umsetzbaren Fahrplan geben.",
    ],
    zh: [
      "我在这里，我在倾听。无论是什么原因让您来到ReviveX——请知道：寻求指导的企业比不寻求的企业恢复速度快3倍。\n\n让我们从清晰开始。用一句话——您的企业现在面临的最大威胁是什么？\n\n一旦我理解了，我就可以给您一个具体、可操作的路线图，而不是通用建议。",
    ],
  },
};

function pickResponse(topic: string, lang: LangCode): string {
  const topicResponses = responses[topic] ?? responses.default;
  const langResponses = topicResponses[lang] ?? topicResponses["en"] ?? responses.default["en"];
  return langResponses[Math.floor(Math.random() * langResponses.length)];
}

export function generateAIResponse(userMessage: string, lang: LangCode = "en"): string {
  const msg = userMessage.toLowerCase();

  if (msg.includes("sales") || msg.includes("dropping") || msg.includes("revenue") ||
      msg.includes("venta") || msg.includes("बिक्री") || msg.includes("ventes") ||
      msg.includes("مبيعات") || msg.includes("vendas") || msg.includes("umsatz") || msg.includes("销售")) {
    return pickResponse("sales", lang);
  }

  if (msg.includes("marketing") || msg.includes("adverti") || msg.includes("مارك") ||
      msg.includes("तسویق") || msg.includes("营销") || msg.includes("publicidad")) {
    return pickResponse("marketing", lang);
  }

  if (msg.includes("customer") || msg.includes("attract") || msg.includes("client") ||
      msg.includes("cliente") || msg.includes("ग्राहक") || msg.includes("عميل") || msg.includes("客户")) {
    return pickResponse("customers", lang);
  }

  if (msg.includes("loss") || msg.includes("recover") || msg.includes("debt") || msg.includes("broke") ||
      msg.includes("pérdida") || msg.includes("नुकसान") || msg.includes("خسارة") || msg.includes("perda") ||
      msg.includes("verlust") || msg.includes("损失") || msg.includes("亏损")) {
    return pickResponse("losses", lang);
  }

  if (msg.includes("brand") || msg.includes("identity") || msg.includes("logo") ||
      msg.includes("marca") || msg.includes("ब्रांड") || msg.includes("علامة") || msg.includes("品牌")) {
    return pickResponse("branding", lang);
  }

  if (msg.includes("pric") || msg.includes("precio") || msg.includes("कीमत") || msg.includes("prix") ||
      msg.includes("سعر") || msg.includes("preço") || msg.includes("preis") || msg.includes("定价") || msg.includes("价格")) {
    return pickResponse("pricing", lang);
  }

  return pickResponse("default", lang);
}

export function generateDiagnosisResult(industry: string, problemAreas: string[]) {
  const urgencyScore = Math.min(95, 40 + problemAreas.length * 10 + Math.random() * 15);
  const issueMap: Record<string, string> = {
    "low sales": "Revenue pipeline has critical gaps — top-of-funnel activity is insufficient to sustain growth targets",
    "poor marketing": "Brand messaging lacks differentiation, failing to resonate with target audience segments",
    "bad retention": "Customer lifetime value is severely undermined by churn — retention rate below industry baseline",
    "financial confusion": "Cash flow visibility is compromised, preventing informed capital allocation decisions",
    "operational issues": "Workflow inefficiencies are creating 20-35% capacity waste that directly impacts profitability",
  };
  const recMap: Record<string, string> = {
    "low sales": "Deploy a structured outreach campaign targeting the top 20% of your lapsed customer base within 14 days",
    "poor marketing": "Conduct a 48-hour brand audit: identify your #1 customer avatar and rebuild all messaging around their core transformation",
    "bad retention": "Implement a proactive check-in sequence for customers at the 30, 60, and 90-day marks post-purchase",
    "financial confusion": "Build a 13-week rolling cash flow forecast updated every Monday — visibility precedes control",
    "operational issues": "Map your core processes and identify the 2-3 bottlenecks creating the most downstream friction",
  };
  const issues = problemAreas.map(p => issueMap[p.toLowerCase()] || `${p} — requires immediate strategic attention`);
  const recommendations = problemAreas.map(p => recMap[p.toLowerCase()] || `Address ${p} through targeted process improvement and accountability systems`);
  issues.push(`${industry} sector facing headwinds — market positioning must be sharpened to remain competitive`);
  recommendations.push("Establish weekly performance reviews using a 5-metric dashboard to maintain recovery momentum");
  const months = Math.ceil(problemAreas.length * 0.8 + 1);
  const recoveryTime = months <= 2 ? "6-8 weeks" : months <= 4 ? "3-4 months" : "4-6 months";
  return {
    summary: `Your ${industry} business shows ${urgencyScore > 70 ? "critical" : urgencyScore > 50 ? "significant" : "moderate"} stress across ${problemAreas.length} key areas. The situation is recoverable — but requires structured, immediate action.`,
    urgencyScore: Math.round(urgencyScore),
    issues,
    recommendations,
    recoveryTimeEstimate: recoveryTime,
  };
}

export function generateSwotAnalysis(industry: string, _description: string) {
  return {
    strengths: [
      "Established customer relationships providing stable baseline revenue",
      `Deep domain expertise in the ${industry} sector`,
      "Lean operational structure enabling rapid strategic pivots",
      "Existing brand recognition reducing cold acquisition costs",
    ],
    weaknesses: [
      "Insufficient marketing investment relative to growth targets",
      "Over-dependence on a narrow customer segment creating concentration risk",
      "Gaps in digital infrastructure limiting scalable customer acquisition",
      "Working capital constraints restricting opportunity capture speed",
    ],
    opportunities: [
      `${industry} sector digitization creating first-mover advantages for adaptors`,
      "Underserved micro-segments within your core market with strong willingness to pay",
      "Strategic partnership opportunities with complementary businesses",
      "Subscription or retainer model conversion to stabilize revenue streams",
    ],
    threats: [
      "Increasing competitive intensity driving price compression",
      "Customer acquisition costs rising across traditional channels",
      "Economic uncertainty affecting customer purchasing confidence",
      `Technology disruption reshaping buyer expectations in the ${industry} space`,
    ],
  };
}

export function generateActionPlan(industry: string, goals: string[], timeframe: string) {
  const steps = [
    { week: 1, action: "Conduct emergency business audit — document current metrics for revenue, costs, and key KPIs", priority: "Critical", details: "Spend 4 hours mapping your current state. You can't navigate without a baseline." },
    { week: 1, action: "Identify and contact your top 10 highest-value customers for relationship reinforcement", priority: "Critical", details: "Personal outreach — not automated. These relationships are your foundation." },
    { week: 2, action: "Implement 13-week rolling cash flow forecast and weekly review cadence", priority: "High", details: "Financial visibility is the prerequisite for every other recovery action." },
    { week: 2, action: "Audit and cut non-essential expenses without reducing revenue-generating capacity", priority: "High", details: "Target 15-25% cost reduction without touching sales, marketing, or service delivery." },
    { week: 3, action: "Launch targeted win-back campaign for customers lost in the last 90 days", priority: "High", details: "Offer an irresistible re-engagement incentive. Previous customers convert at 5x the rate of cold leads." },
    { week: 4, action: "Redesign core offer based on customer feedback and competitive analysis", priority: "Medium", details: "Your offer should feel unmissable." },
    { week: 5, action: "Build and activate a referral program with immediate incentive structure", priority: "Medium", details: "Turn your best customers into your best salespeople." },
    { week: 6, action: "Review and optimize all conversion points in your sales funnel", priority: "Medium", details: "Find the leak before you increase the water pressure." },
    { week: 8, action: "Launch one new acquisition channel based on where your best customers spend time", priority: "Medium", details: "Test with a 30-day budget — measure ruthlessly." },
    { week: 10, action: "Conduct full team alignment session on revised strategy and 90-day targets", priority: "Medium", details: "Everyone must understand the mission, metrics, and their role." },
    { week: 12, action: "Assess recovery progress against baseline metrics and recalibrate 6-month strategy", priority: "High", details: "Celebrate wins, honestly assess gaps, update the plan." },
  ];
  const milestones = [
    "Week 2: Full financial visibility established with rolling cash flow forecast",
    "Week 4: Win-back campaign launched with measurable re-engagement metrics",
    "Week 6: Core offer redesign complete and tested with early adopters",
    "Month 2: Revenue stabilization — net new revenue exceeds churn for the first time",
    "Month 3: First signs of compounding growth from referral and retention improvements",
    timeframe.toLowerCase().includes("6") ? "Month 6: Business operating at pre-crisis health score" : "Month 3: Full recovery phase initiated with positive momentum",
  ];
  return {
    title: `${industry} Business Recovery Plan — ${timeframe} Timeline`,
    steps: steps.slice(0, goals.length > 3 ? 11 : 8),
    milestones,
  };
}

const quotes = [
  { quote: "The impediment to action advances action. What stands in the way becomes the way.", author: "Marcus Aurelius", category: "Resilience" },
  { quote: "Every adversity carries with it the seed of an equal or greater benefit.", author: "Napoleon Hill", category: "Opportunity" },
  { quote: "It is not the strongest species that survive, but the most responsive to change.", author: "Charles Darwin", category: "Adaptation" },
  { quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela", category: "Recovery" },
  { quote: "A smooth sea never made a skilled sailor.", author: "Franklin D. Roosevelt", category: "Growth" },
  { quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill", category: "Perseverance" },
  { quote: "The secret of getting ahead is getting started.", author: "Mark Twain", category: "Action" },
  { quote: "In the middle of every difficulty lies opportunity.", author: "Albert Einstein", category: "Opportunity" },
  { quote: "It always seems impossible until it's done.", author: "Nelson Mandela", category: "Achievement" },
  { quote: "Your most unhappy customers are your greatest source of learning.", author: "Bill Gates", category: "Growth" },
  { quote: "The way to get started is to quit talking and begin doing.", author: "Walt Disney", category: "Action" },
  { quote: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson", category: "Perseverance" },
];

export function getMotivationalQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}
