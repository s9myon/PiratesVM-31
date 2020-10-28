class Team:
    def __init__(self, data):
        self.teamId = data['teamId']
        self.name = data['name']
        self.players = data['players']
        self.password = data['password']
        self.isPrivate = data['isPrivate']
        self.minPlayers = data['minPlayers']
        self.roomId = data['roomId']

    def get(self):
        players = []
        for player in self.players:
            players.append(player.get())
        return dict(teamId=self.teamId,
                    name=self.name,
                    players=players,
                    playersCount=len(self.players),
                    password=self.password,
                    isPrivate=self.isPrivate
                    )

    def getSelf(self):
        return dict(teamId=self.teamId,
                    name=self.name,
                    players=self.players,
                    password=self.password,
                    isPrivate= self.isPrivate,
                    minPlayers=self.minPlayers,
                    roomId=self.roomId
                    )
