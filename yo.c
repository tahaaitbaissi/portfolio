#include <stdio.h>
#include <math.h>

void main() {
	//s variable qui compte le nombre des cases saisis
	//l et c pour detecter si on est dans une ligne ou colomne
	//k detecteur de parité
	int n, m, i, j, s=0, l=1, c=0, k=2;
	//remplissage 
	printf("----\nInitialisation:\nSaisir les dimentions de tableau : ");
	scanf("%d%d", &n, &m);
	//les bornes pour les indices i et j
	int a=n, b=0, x=m, y=0;
	int t[n][m];
	i=0;j=-1;
	while (s<n*m) {
		if (l==1) {
					j += pow(-1, k);
					} else if (c==1) {
						i += pow(-1, k);
						}
		if ((i<a)&&(i>=b)&&(j<x)&&(j>=y)) {
			do {
				printf("Saisir la case t[%d][%d] : ", i, j);
				scanf("%d", &t[i][j]);
				if ((t[i][j]<1)||(t[i][j]>n*m))
					printf("resaisir la valeur tel que %d<x<%d  ", 1, n*m);
				} while ((t[i][j]<1)||(t[i][j]>n*m));
				s++;
			} else {
				if (l==1) {
					j += pow(-1,k+1);
					c=1;
					l=0;
					if (k%2==0)
						b++;
						else 
							a--;
					} else if (c==1) {
						l = 1;
						i += pow(-1, k+1);
						c = 0;
						if (k%2==0)
							x--;
							else
								y++;
						k++;
						}
				}
		}
