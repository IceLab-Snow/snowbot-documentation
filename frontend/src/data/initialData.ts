// frontend/src/data/initialData.ts
import { ApiData } from '../types';

export const completeInitialData: ApiData = {
  character: {
    name: 'Character',
    icon: 'User',
    color: 'from-blue-500 to-cyan-500',
    functions: [
      { name: 'character:accountId()', returns: 'number', description: 'Retourne l\'ID du compte', tags: ['account', 'id'] },
      { name: 'character:askShieldCode()', returns: 'void', description: 'Demande le code Shield', tags: ['shield', 'security'] },
      { name: 'character:askShieldCodeNew(nickname, apiKey)', returns: 'void', description: 'Demande le code Shield avec API', tags: ['shield', 'security'] },
      { name: 'character:breed()', returns: 'number', description: 'Retourne l\'ID de la classe', tags: ['class', 'info'] },
      { name: 'character:breedName()', returns: 'string', description: 'Retourne le nom de la classe', tags: ['class', 'info'] },
      { name: 'character:certified()', returns: 'boolean', description: 'Vérifie si le compte est certifié', tags: ['security', 'shield'] },
      { name: 'character:energyPoints()', returns: 'number', description: 'Points d\'énergie actuels', tags: ['energy', 'stats'] },
      { name: 'character:experience()', returns: 'number', description: 'Expérience actuelle', tags: ['xp', 'stats'] },
      { name: 'character:freeMode()', returns: 'boolean', description: 'Vérifie si en mode gratuit', tags: ['account', 'status'] },
      { name: 'character:getAgilityBase()', returns: 'number', description: 'Agilité de base', tags: ['stats', 'agility'] },
      { name: 'character:getChanceBase()', returns: 'number', description: 'Chance de base', tags: ['stats', 'chance'] },
      { name: 'character:getCostAgility()', returns: 'number', description: 'Coût pour augmenter l\'agilité', tags: ['stats', 'cost'] },
      { name: 'character:getCostChance()', returns: 'number', description: 'Coût pour augmenter la chance', tags: ['stats', 'cost'] },
      { name: 'character:getCostIntelligence()', returns: 'number', description: 'Coût pour augmenter l\'intelligence', tags: ['stats', 'cost'] },
      { name: 'character:getCostStrenght()', returns: 'number', description: 'Coût pour augmenter la force', tags: ['stats', 'cost'] },
      { name: 'character:getCostVitality()', returns: 'number', description: 'Coût pour augmenter la vitalité', tags: ['stats', 'cost'] },
      { name: 'character:getCostWisdom()', returns: 'number', description: 'Coût pour augmenter la sagesse', tags: ['stats', 'cost'] },
      { name: 'character:getIntelligenceBase()', returns: 'number', description: 'Intelligence de base', tags: ['stats', 'intelligence'] },
      { name: 'character:getSecondsBeforeFreeMode()', returns: 'number', description: 'Secondes avant le mode gratuit', tags: ['time', 'account'] },
      { name: 'character:getSpellMinPlayerLevel(spellId)', returns: 'number', description: 'Niveau minimum pour un sort', tags: ['spell', 'level'] },
      { name: 'character:getSpellVariant(varSpellId)', returns: 'boolean', description: 'Vérifie si variante de sort active', tags: ['spell', 'variant'] },
      { name: 'character:getStats()', returns: 'object', description: 'Retourne toutes les statistiques', tags: ['stats', 'info'] },
      { name: 'character:getStatus()', returns: 'string', description: 'Retourne le statut du personnage', tags: ['status', 'info'] },
      { name: 'character:getStrenghtBase()', returns: 'number', description: 'Force de base', tags: ['stats', 'strength'] },
      { name: 'character:getURLBodySkin(orientation, width, height, zoom)', returns: 'string', description: 'URL du skin du corps', tags: ['skin', 'url'] },
      { name: 'character:getURLFaceSkin(orientation, width, height, zoom)', returns: 'string', description: 'URL du skin du visage', tags: ['skin', 'url'] },
      { name: 'character:getVitalityBase()', returns: 'number', description: 'Vitalité de base', tags: ['stats', 'vitality'] },
      { name: 'character:getWisdomBase()', returns: 'number', description: 'Sagesse de base', tags: ['stats', 'wisdom'] },
      { name: 'character:id()', returns: 'number', description: 'ID du personnage', tags: ['id', 'info'] },
      { name: 'character:identifier()', returns: 'string', description: 'Identifiant unique du personnage', tags: ['id', 'info'] },
      { name: 'character:isInFight()', returns: 'boolean', description: 'Vérifie si en combat', tags: ['fight', 'status'] },
      { name: 'character:kamas()', returns: 'number', description: 'Nombre de kamas', tags: ['kamas', 'economy'] },
      { name: 'character:level()', returns: 'number', description: 'Niveau du personnage', tags: ['level', 'info'] },
      { name: 'character:lifePoints()', returns: 'number', description: 'Points de vie actuels', tags: ['health', 'stats'] },
      { name: 'character:lifePointsP()', returns: 'number', description: 'Pourcentage de points de vie', tags: ['health', 'stats'] },
      { name: 'character:maxEnergyPoints()', returns: 'number', description: 'Points d\'énergie maximum', tags: ['energy', 'stats'] },
      { name: 'character:maxLifePoints()', returns: 'number', description: 'Points de vie maximum', tags: ['health', 'stats'] },
      { name: 'character:name()', returns: 'string', description: 'Nom du personnage', tags: ['info', 'name'] },
      { name: 'character:nickname()', returns: 'string', description: 'Pseudo du compte', tags: ['account', 'name'] },
      { name: 'character:resetStats()', returns: 'void', description: 'Réinitialise les statistiques', tags: ['stats', 'action'] },
      { name: 'character:sendShieldCode(code)', returns: 'void', description: 'Envoie le code Shield', tags: ['shield', 'security'] },
      { name: 'character:sendShieldCodeNew(code, apiKey)', returns: 'void', description: 'Envoie le code Shield avec API', tags: ['shield', 'security'] },
      { name: 'character:server()', returns: 'string', description: 'Nom du serveur', tags: ['server', 'info'] },
      { name: 'character:serverId()', returns: 'number', description: 'ID du serveur', tags: ['server', 'id'] },
      { name: 'character:serverName()', returns: 'string', description: 'Nom complet du serveur', tags: ['server', 'info'] },
      { name: 'character:sex()', returns: 'boolean', description: 'Sexe du personnage', tags: ['info', 'character'] },
      { name: 'character:statsPoint()', returns: 'number', description: 'Points de caractéristiques disponibles', tags: ['stats', 'points'] },
      { name: 'character:trusted()', returns: 'boolean', description: 'Vérifie si compte de confiance', tags: ['security', 'account'] },
      { name: 'character:UpgradeAgility(StatsPoint)', returns: 'void', description: 'Augmente l\'agilité', tags: ['stats', 'upgrade'] },
      { name: 'character:UpgradeChance(StatsPoint)', returns: 'void', description: 'Augmente la chance', tags: ['stats', 'upgrade'] },
      { name: 'character:UpgradeIntelligence(StatsPoint)', returns: 'void', description: 'Augmente l\'intelligence', tags: ['stats', 'upgrade'] },
      { name: 'character:UpgradeStrenght(StatsPoint)', returns: 'void', description: 'Augmente la force', tags: ['stats', 'upgrade'] },
      { name: 'character:UpgradeVitality(StatsPoint)', returns: 'void', description: 'Augmente la vitalité', tags: ['stats', 'upgrade'] },
      { name: 'character:UpgradeWisdom(StatsPoint)', returns: 'void', description: 'Augmente la sagesse', tags: ['stats', 'upgrade'] }
    ]
  },
  exchange: {
    name: 'Exchange',
    icon: 'ArrowRightLeft',
    color: 'from-green-500 to-emerald-500',
    functions: [
      { name: 'exchange:getAllItems()', returns: 'void', description: 'Récupère tous les objets', tags: ['items', 'get'] },
      { name: 'exchange:getAllItemsExcept(except)', returns: 'void', description: 'Récupère tous les objets sauf exceptions', tags: ['items', 'filter'] },
      { name: 'exchange:getItem(objectGID, quantity, delay)', returns: 'void', description: 'Récupère un objet spécifique', tags: ['items', 'get'] },
      { name: 'exchange:getKamas(kamas)', returns: 'void', description: 'Récupère des kamas', tags: ['kamas', 'get'] },
      { name: 'exchange:LaunchExchangeWithPlayer(PlayerId)', returns: 'boolean', description: 'Lance un échange avec un joueur', tags: ['player', 'trade'] },
      { name: 'exchange:launchExchangeWithPlayerByName(name)', returns: 'boolean', description: 'Lance un échange par nom', tags: ['player', 'trade'] },
      { name: 'exchange:leave()', returns: 'void', description: 'Quitte l\'échange', tags: ['action', 'leave'] },
      { name: 'exchange:putAllItems()', returns: 'void', description: 'Dépose tous les objets', tags: ['items', 'put'] },
      { name: 'exchange:putAllItemsExcept(except)', returns: 'void', description: 'Dépose tous sauf exceptions', tags: ['items', 'filter'] },
      { name: 'exchange:putItem(objectGID, quantity)', returns: 'void', description: 'Dépose un objet', tags: ['items', 'put'] },
      { name: 'exchange:putKamas(kamas)', returns: 'void', description: 'Dépose des kamas', tags: ['kamas', 'put'] },
      { name: 'exchange:Ready()', returns: 'void', description: 'Valide l\'échange', tags: ['action', 'confirm'] },
      { name: 'exchange:storageItemCount()', returns: 'number', description: 'Nombre d\'objets en stockage', tags: ['storage', 'count'] },
      { name: 'exchange:storageItemQuantity(GID)', returns: 'number', description: 'Quantité d\'un objet', tags: ['storage', 'quantity'] },
      { name: 'exchange:storageItems()', returns: 'table', description: 'Liste des objets', tags: ['storage', 'items'] },
      { name: 'exchange:storageKamas()', returns: 'number', description: 'Kamas en stockage', tags: ['storage', 'kamas'] }
    ]
  },
  global: {
    name: 'Global',
    icon: 'Globe',
    color: 'from-purple-500 to-pink-500',
    functions: [
      { name: 'global:accountTag()', returns: 'string', description: 'Tag du compte', tags: ['account', 'info'] },
      { name: 'global:activateAntiModerator(value)', returns: 'void', description: 'Active anti-modérateur', tags: ['security', 'moderator'] },
      { name: 'global:addInMemory(variableName, value)', returns: 'void', description: 'Ajoute en mémoire', tags: ['memory'] },
      { name: 'global:afterFight()', returns: 'boolean', description: 'Vérifie si après combat', tags: ['fight', 'state'] },
      { name: 'global:askInput(question, title)', returns: 'string', description: 'Demande une saisie utilisateur', tags: ['input', 'dialog'] },
      { name: 'global:askQuestion(question)', returns: 'boolean', description: 'Pose une question oui/non', tags: ['input', 'dialog'] },
      { name: 'global:charactersList()', returns: 'object', description: 'Liste des personnages', tags: ['character', 'list'] },
      { name: 'global:checkModerator(minutes)', returns: 'boolean', description: 'Vérifie présence modérateur', tags: ['security', 'moderator'] },
      { name: 'global:clearConsole()', returns: 'void', description: 'Efface la console', tags: ['console', 'clear'] },
      { name: 'global:delay(Time)', returns: 'void', description: 'Pause le script', tags: ['time', 'wait'] },
      { name: 'global:deleteAllMemory()', returns: 'void', description: 'Supprime toute la mémoire', tags: ['memory', 'delete'] },
      { name: 'global:disconnect()', returns: 'void', description: 'Déconnecte le personnage', tags: ['connection', 'disconnect'] },
      { name: 'global:elapsedTime()', returns: 'number', description: 'Temps écoulé', tags: ['time', 'elapsed'] },
      { name: 'global:finishScript()', returns: 'void', description: 'Termine le script', tags: ['script', 'stop'] },
      { name: 'global:getAlias()', returns: 'string', description: 'Récupère l\'alias', tags: ['account', 'alias'] },
      { name: 'global:getCountFight()', returns: 'number', description: 'Nombre de combats', tags: ['fight', 'count'] },
      { name: 'global:getCountGather()', returns: 'number', description: 'Nombre de récoltes', tags: ['gather', 'count'] },
      { name: 'global:getTeamMembers()', returns: 'table', description: 'Membres de l\'équipe', tags: ['team', 'members'] },
      { name: 'global:isInFight()', returns: 'boolean', description: 'Vérifie si en combat', tags: ['fight', 'state'] },
      { name: 'global:isScriptPlaying()', returns: 'boolean', description: 'Script en cours', tags: ['script', 'state'] },
      { name: 'global:leaveDialog()', returns: 'void', description: 'Quitte le dialogue', tags: ['dialog', 'leave'] },
      { name: 'global:printError(Message)', returns: 'void', description: 'Affiche une erreur', tags: ['console', 'error'] },
      { name: 'global:printMessage(Message)', returns: 'void', description: 'Affiche un message', tags: ['console', 'print'] },
      { name: 'global:printSuccess(message)', returns: 'void', description: 'Affiche un succès', tags: ['console', 'success'] },
      { name: 'global:random(min, max)', returns: 'number', description: 'Nombre aléatoire', tags: ['math', 'random'] },
      { name: 'global:reconnect(Heure)', returns: 'void', description: 'Reconnexion programmée', tags: ['connection', 'reconnect'] },
      { name: 'global:remember(variableName)', returns: 'object', description: 'Récupère de la mémoire', tags: ['memory', 'get'] },
      { name: 'global:username()', returns: 'string', description: 'Nom d\'utilisateur', tags: ['account', 'username'] }
    ]
  },
  inventory: {
    name: 'Inventory',
    icon: 'Package',
    color: 'from-orange-500 to-red-500',
    functions: [
      { name: 'inventory:deleteItem(ObjectID, Qte)', returns: 'boolean', description: 'Supprime des objets', tags: ['delete', 'items'] },
      { name: 'inventory:destuff(delay)', returns: 'boolean', description: 'Déséquipe tout', tags: ['equipment', 'remove'] },
      { name: 'inventory:dropItem(ObjectID, Qte)', returns: 'boolean', description: 'Jette des objets', tags: ['drop', 'items'] },
      { name: 'inventory:equipItem(ObjectID, position)', returns: 'boolean', description: 'Équipe un objet', tags: ['equipment', 'equip'] },
      { name: 'inventory:getAveragePrice(gid)', returns: 'number', description: 'Prix moyen d\'un objet', tags: ['price', 'economy'] },
      { name: 'inventory:getGID(objectID)', returns: 'number', description: 'Récupère le GID', tags: ['id', 'gid'] },
      { name: 'inventory:getUID(objectID)', returns: 'number', description: 'Récupère l\'UID', tags: ['id', 'uid'] },
      { name: 'inventory:inventoryContent()', returns: 'table', description: 'Contenu de l\'inventaire', tags: ['content', 'list'] },
      { name: 'inventory:itemCount(ObjectID)', returns: 'number', description: 'Nombre d\'objets', tags: ['count', 'quantity'] },
      { name: 'inventory:itemWeight(ObjectID)', returns: 'number', description: 'Poids de l\'objet', tags: ['weight', 'pods'] },
      { name: 'inventory:pods()', returns: 'number', description: 'Pods actuels', tags: ['pods', 'weight'] },
      { name: 'inventory:podsMax()', returns: 'number', description: 'Pods maximum', tags: ['pods', 'max'] },
      { name: 'inventory:podsP()', returns: 'number', description: 'Pourcentage de pods', tags: ['pods', 'percentage'] },
      { name: 'inventory:useItem(ObjectID)', returns: 'boolean', description: 'Utilise un objet', tags: ['use', 'action'] }
    ]
  },
  job: {
    name: 'Job',
    icon: 'Hammer',
    color: 'from-amber-500 to-yellow-600',
    functions: [
      { name: 'job:level(Jobid)', returns: 'number', description: 'Niveau du métier', tags: ['level', 'profession'] },
      { name: 'job:name(Jobid)', returns: 'string', description: 'Nom du métier', tags: ['name', 'profession'] }
    ]
  },
  map: {
    name: 'Map',
    icon: 'Map',
    color: 'from-indigo-500 to-purple-600',
    functions: [
      { name: 'map:cellDistance(cell1, cell2)', returns: 'number', description: 'Distance entre cellules', tags: ['cell', 'distance'] },
      { name: 'map:changeMap(Direction)', returns: 'void', description: 'Change de map', tags: ['movement', 'change'] },
      { name: 'map:currentCell()', returns: 'number', description: 'Cellule actuelle', tags: ['cell', 'current'] },
      { name: 'map:currentMap()', returns: 'string', description: 'Map actuelle', tags: ['map', 'current'] },
      { name: 'map:currentMapId()', returns: 'number', description: 'ID de la map actuelle', tags: ['map', 'id'] },
      { name: 'map:door(Cellid)', returns: 'void', description: 'Utilise une porte', tags: ['door', 'interactive'] },
      { name: 'map:fight()', returns: 'void', description: 'Lance un combat', tags: ['fight', 'start'] },
      { name: 'map:gather()', returns: 'void', description: 'Récolte les ressources', tags: ['gather', 'resource'] },
      { name: 'map:getDistance(cell1, cell2)', returns: 'number', description: 'Distance entre cellules', tags: ['distance', 'cell'] },
      { name: 'map:getX(mapId)', returns: 'number', description: 'Coordonnée X', tags: ['coords', 'x'] },
      { name: 'map:getY(mapId)', returns: 'number', description: 'Coordonnée Y', tags: ['coords', 'y'] },
      { name: 'map:gotomap(x, y)', returns: 'void', description: 'Va aux coordonnées', tags: ['movement', 'goto'] },
      { name: 'map:isWalkable(cellId)', returns: 'boolean', description: 'Cellule marchable', tags: ['cell', 'walkable'] },
      { name: 'map:moveToCell(cellId)', returns: 'void', description: 'Va à la cellule', tags: ['movement', 'cell'] },
      { name: 'map:onCell(cellId)', returns: 'boolean', description: 'Sur la cellule', tags: ['cell', 'position'] },
      { name: 'map:onMap(Coords)', returns: 'boolean', description: 'Sur la map', tags: ['map', 'position'] },
      { name: 'map:saveZaap()', returns: 'void', description: 'Sauvegarde zaap', tags: ['zaap', 'save'] },
      { name: 'map:useById(elementId, skillInstanceUid)', returns: 'void', description: 'Utilise élément par ID', tags: ['interactive', 'use'] }
    ]
  },
  npc: {
    name: 'NPC',
    icon: 'MessageSquare',
    color: 'from-violet-500 to-purple-600',
    functions: [
      { name: 'npc:leaveDialog()', returns: 'void', description: 'Quitte le dialogue', tags: ['dialog', 'leave'] },
      { name: 'npc:npc(npcId, ActionID)', returns: 'void', description: 'Interagit avec PNJ', tags: ['npc', 'interact'] },
      { name: 'npc:npcBank(npcId)', returns: 'void', description: 'Ouvre banque PNJ', tags: ['bank', 'npc'] },
      { name: 'npc:reply(replyIndex)', returns: 'object', description: 'Choisit réponse', tags: ['dialog', 'reply'] },
      { name: 'npc:SendReply(replyId)', returns: 'void', description: 'Envoie réponse ID', tags: ['dialog', 'send'] }
    ]
  },
  sale: {
    name: 'Sale',
    icon: 'ShoppingCart',
    color: 'from-emerald-500 to-teal-600',
    functions: [
      { name: 'sale:buyItem(GID, Lots, PriceMax)', returns: 'void', description: 'Achète en HDV', tags: ['hdv', 'buy'] },
      { name: 'sale:SellItem(ItemGID, Lots, price)', returns: 'void', description: 'Vend en HDV', tags: ['hdv', 'sell'] },
      { name: 'sale:GetPriceItem(ItemGID, Lots)', returns: 'number', description: 'Prix d\'un objet', tags: ['hdv', 'price'] },
      { name: 'sale:ItemsOnSale()', returns: 'number', description: 'Objets en vente', tags: ['hdv', 'count'] }
    ]
  },
  craft: {
    name: 'Craft',
    icon: 'Wrench',
    color: 'from-red-500 to-pink-600',
    functions: [
      { name: 'craft:ChangeQuantityToCraft(Quantity)', returns: 'void', description: 'Change quantité à craft', tags: ['craft', 'quantity'] },
      { name: 'craft:PutItem(GID, quantity)', returns: 'void', description: 'Ajoute ingrédient', tags: ['craft', 'ingredient'] },
      { name: 'craft:Ready()', returns: 'void', description: 'Lance le craft', tags: ['craft', 'start'] }
    ]
  },
  mount: {
    name: 'Mount',
    icon: 'Bird',
    color: 'from-lime-500 to-green-600',
    functions: [
      { name: 'mount:hasMount()', returns: 'boolean', description: 'Possède une monture', tags: ['mount', 'check'] },
      { name: 'mount:isRiding()', returns: 'boolean', description: 'Sur la monture', tags: ['mount', 'riding'] },
      { name: 'mount:level()', returns: 'number', description: 'Niveau de la monture', tags: ['mount', 'level'] },
      { name: 'mount:toggleRiding()', returns: 'void', description: 'Monte/descend monture', tags: ['mount', 'toggle'] }
    ]
  }
};

export default completeInitialData;