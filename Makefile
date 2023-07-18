all : up

up:
	mkdir -p /Users/gyyu/transcendence/data/front
	docker compose -f ./srcs/docker-compose.yml up --build

down:
	docker compose -f ./srcs/docker-compose.yml down

clean:
	docker compose -f ./srcs/docker-compose.yml down --rmi all

fclean: 
	docker compose -f ./srcs/docker-compose.yml down -v --rmi all
	make prune
prune: 
	docker system prune -a -f
re: fclean all

.PHONY: all up down clean fclean re