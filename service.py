class Service:
    def __init__(self, prop:str):
        self.prop = prop


    def print_prop(self):
        print(self.prop)



if __name__ == "__main__":
    service=Service()
    service.print_prop()